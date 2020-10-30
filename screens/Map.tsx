import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import {getAllTrashes} from '../redux/actions/trash';
import Geolocation from '@react-native-community/geolocation';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface Props {
  navigation: any;
}

export default (props: any) => {
  const [state, setState] = useState({
    location: null,
  });
  const dispatch = useDispatch();
  const trashState = useSelector(state => state.trash);

  useEffect(() => {
    dispatch(getAllTrashes());

    Geolocation.getCurrentPosition(
      info => {
        setState(state => {
          return {
            ...state,
            location: info.coords,
          }
        })
        location = info;
      },
      error => {
        console.log('Error:', error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );

  }, [dispatch, setState]);

  const goToPersonalLocation = () => {
    mainMap.animateCamera({
      center: {
        latitude: state.location.latitude,
          longitude: state.location.longitude,
      } },
      {duration: 1000}
    );
  }

  const createMarkers = () => {
    return trashState.mapTrashes.map(trash => (
      <Marker.Animated
        key="ADD_KEY"
        identifier={trash.id}
        coordinate={{
          latitude: trash.latitude,
          longitude: trash.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        onPress={$event => trashDetails($event)}
        image={require('../assets/marker-3.png')}
        centerOffset={{x: 0, y: -50}}
      />
    ));
  }

  const trashDetails = $event => {
    console.log('id trash', $event.nativeEvent.id);
    props.navigation.navigate('trashDetails', {
      trashId: $event.nativeEvent.id
    });
  }

  const openCamera = () => {
    props.navigation.navigate('camera');
  }

  return (
    <View style={styles.container}>
      {
        state.location &&
        <MapView
          style={styles.map}
          ref={ref => {
            mainMap = ref;
          }}
          initialRegion={{
            latitude: state.location.latitude,
            longitude: state.location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          showsUserLocation={true}
          // followsUserLocation={true}
          >
          {createMarkers()}
        </MapView>
      }
      

      <View style={styles.buttonContainer}>
        <View style={styles.littleButtonsContainer}>
          <View />
          <TouchableOpacity
            onPress={() => openCamera()}
            style={[styles.bubble, styles.trashButton]}
          />
          <TouchableOpacity
            onPress={() => goToPersonalLocation()}
            style={[styles.bubble, styles.locationButton]}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  locationButton: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 3,
    right: 20,
    borderColor: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(255,255,255,0.5)',
  },
  trashButton: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 6,
    borderColor: 'rgba(255,255,255,0.8)',
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginBottom: 40,
  },
  littleButtonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  buttonContainer: {
    display: 'flex',
  },
});
