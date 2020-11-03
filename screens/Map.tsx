import React, { useEffect, useState } from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getAllTrashes } from '../redux/actions/trash';

// Components
import { StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import AddButton from '../components/AddButton';
import Icon from 'react-native-vector-icons/FontAwesome';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface Props {
  navigation: any;
}
interface State {
  location: any;
}

export default (props: Props) => {
  const [state, setState] = useState<State>({
    location: null,
  });
  const dispatch = useDispatch();
  const trashState = useSelector((state: any) => state.trash);

  useEffect(() => {
    dispatch(getAllTrashes());

    Geolocation.getCurrentPosition(
      (info: any) => {
        setState((state: any) => {
          return {
            ...state,
            location: info.coords,
          };
        });
        location = info;
      },
      (error: any) => {
        console.log('Error:', error);
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, [dispatch, setState]);

  const goToPersonalLocation = () => {
    mainMap.animateCamera(
      {
        center: {
          latitude: state.location.latitude,
          longitude: state.location.longitude,
        },
      },
      { duration: 1000 },
    );
  };

  const createMarkers = () => {
    return trashState.mapTrashes.map((trash: any) => (
      <Marker.Animated
        key={`ADD_KEY${trash.id}`}
        identifier={trash.id}
        coordinate={{
          latitude: trash.latitude,
          longitude: trash.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        onPress={($event: any) => trashDetails($event)}
        image={require('../assets/marker-3.png')}
        centerOffset={{ x: 0, y: -50 }}
      />
    ));
  };

  const trashDetails = ($event: any) => {
    console.log('id trash', $event.nativeEvent.id);
    props.navigation.navigate('trashDetails', {
      trashId: $event.nativeEvent.id,
    });
  };

  const openCamera = () => {
    props.navigation.navigate('camera');
  };

  return (
    <View style={styles.container}>
      {state.location && (
        <MapView
          style={styles.map}
          ref={(ref: any) => {
            mainMap = ref;
          }}
          initialRegion={{
            latitude: state.location.latitude,
            longitude: state.location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          showsUserLocation={true}>
          {createMarkers()}
        </MapView>
      )}

      <View style={styles.buttonContainer}>
        <View style={styles.leftButton} />
        <AddButton action={openCamera} />
        <TouchableOpacity
          onPress={() => goToPersonalLocation()}
          style={styles.locationButton}>
          <Icon name="location-arrow" size={25} color="rgba(255,255,255,1)" />
        </TouchableOpacity>
        {/* </View> */}
      </View>
    </View>
  );
};

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
    right: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  leftButton: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderWidth: 3,
    left: 20,
    borderColor: 'rgba(255,255,255,0)',
    backgroundColor: 'rgba(255,255,255,0)',
  },
});
