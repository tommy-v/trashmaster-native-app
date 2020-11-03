import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';
import TrashService from '../../services/trash.service';

// Store
import { useDispatch } from 'react-redux';
import { turnLoading } from '../../redux/actions/global';
import MapView, { Marker } from 'react-native-maps';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default (props: any) => {
  const dispatch = useDispatch();

  const [state] = useState({
    navigation: props.navigation,
    base64: props.route.params.base64,
    uri: props.route.params.uri,
    location: props.route.params.location,

    trashId: props.route.params.trashId,
  });

  const addTrash = async () => {
    dispatch(turnLoading(true));

    // TODO Move to store
    await TrashService.createNewTrash({
      base64: state.base64,
      location: {
        latitude: state.location.coords.latitude,
        longitude: state.location.coords.longitude,
      },
    })
      .then(() => {
        dispatch(turnLoading(false));
        state.navigation.navigate('map');
      })
      .error((err: any) => {
        dispatch(turnLoading(false));
        alert('Error, please check the logs');
        console.error(err);
      });
  };

  return (
    <View>
      <View style={styles.status}>
        <Text style={styles.textStatus}>Created</Text>
      </View>
      <Image style={styles.picture} source={{ uri: state.uri }} />
      <View style={styles.mapPreviewContainer}>
        <Text style={styles.locationText}>Location</Text>
        <MapView
          style={styles.map}
          ref={(ref) => {
            map = ref;
          }}
          initialRegion={{
            latitude: state.location.coords.latitude,
            longitude: state.location.coords.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          initialCamera={{
            center: {
              latitude: state.location.coords.latitude,
              longitude: state.location.coords.longitude,
            },
            altitude: 500,
          }}
          scrollEnabled={false}
          zoomEnabled={false}>
          <Marker.Animated
            key="DEFAULT_KEY"
            identifier="DEFAULT_ID"
            coordinate={{
              latitude: state.location.coords.latitude,
              longitude: state.location.coords.longitude,
              latitudeDelta: LATITUDE_DELTA,
              longitudeDelta: LONGITUDE_DELTA,
            }}
            centerOffset={{ x: 0, y: -50 }}
          />
        </MapView>
      </View>
      <Button onPress={addTrash} title="Validate" />
    </View>
  );
};

const styles = StyleSheet.create({
  picture: {
    width: '100%',
    height: 300, // Mandatory
  },
  status: {
    top: 20,
    backgroundColor: 'rgba(25,255,255,0.5)',
    position: 'absolute',
    display: 'flex',
    height: 30,
    width: 100,
    zIndex: 300,
    borderTopEndRadius: 5,
    borderBottomEndRadius: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  textStatus: {
    color: 'white',
    marginRight: 20,
    fontWeight: 'bold',
  },
  map: {
    width: '100%',
    height: 150,
  },
  mapPreviewContainer: {
    margin: 20,
  },
  locationText: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
