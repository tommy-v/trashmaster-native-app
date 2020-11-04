// Libs
import React, {useEffect, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';

// Components
import {View, Text, Button, StyleSheet, Dimensions, Image} from 'react-native';

// Store
import {useDispatch, useSelector} from 'react-redux';
import {turnLoading} from '../store/actions/global';

// Service
import TrashService from '../services/trash.service';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default props => {
  const dispatch = useDispatch();
  const navigation = props.navigation;
  const [state, setState] = useState({
    trashId: props.route.params.trashId,
    trashDetails: null,
    statusNames: ['Dépôt notifié', 'Dépôt nettoyé'],
  });

  const nextState = () => {
    dispatch(turnLoading(true));
    TrashService.updateTrashStatus(state.trashId, state.trashDetails.status + 1)
      .then(res => {
        dispatch(turnLoading(false));
        navigation.navigate('map')
      });
  };

  const stillDirty = () => {
    dispatch(turnLoading(true));
    TrashService.updateTrashStatus(state.trashId, 0)
      .then(res => {
        dispatch(turnLoading(false));
        navigation.navigate('map')
      });
  };

  const voteForTrash = () => {
    dispatch(turnLoading(true));
    TrashService.voteForTrash(state.trashId)
    .then(res => {
      dispatch(turnLoading(true));
      navigation.navigate('map')
    });
  }

  useEffect(() => {
    TrashService.getTrashDetails('trashId').then(res => {
      setState(state => {
        return {
          ...state,
          trashDetails: {
            ...res,
          }
        }
      })
    });
  }, setState);

  return (
    <View>
      {
        state.trashDetails ?
        <View>
            <View>
              <Text>
                {state.statusNames[state.trashDetails.status]}
              </Text>
            </View>
          <View>
            <Image style={styles.tinyLogo} source={{url: state.trashDetails.picture}} />
          </View>
          <View>
          <MapView
          style={styles.map}
          ref={ref => {
            map = ref;
          }}
          initialRegion={{
            latitude: state.trashDetails.location.latitude,
            longitude: state.trashDetails.location.longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          initialCamera={{ 
            center: {
              latitude: state.trashDetails.location.latitude,
              longitude: state.trashDetails.location.longitude,
            },
            altitude: 500
          }}
          scrollEnabled={false}
          zoomEnabled={false}
          >
            <Marker.Animated
              key="ADD_KEY"
              identifier={state.trashDetails.trashId}
              coordinate={{
                latitude: state.trashDetails.location.latitude,
                longitude: state.trashDetails.location.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }}
              centerOffset={{x: 0, y: -50}}
            />
        </MapView>
          </View>
          {state.trashDetails.status === 1 &&
          <View>
            <Button onPress={stillDirty} title={"Les déchets sont toujours présents 😢"}></Button>
          </View>
          }
          <View>
            <Button onPress={nextState} title={state.trashDetails.status === 0 ? "J'ai nettoyé 💪" : "C'est propre 🎉"} />
          </View>
        </View>
        :
        <View>
          <Text>Loading</Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 150,
  },
  tinyLogo: {
    width: '100%',
    height: 200,
  },
});
