import React, {useState} from 'react';
import {View, Button, Text, Image, StyleSheet} from 'react-native';
import TrashService from '../services/trash.service';

// Store
import {useDispatch} from 'react-redux';
import {turnLoading} from '../redux/actions/global';

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default props => {
  const dispatch = useDispatch();

  const [state] = useState({
    navigation: props.navigation,
    base64: props.route.params.base64,
    uri: props.route.params.uri,
    location: props.route.params.location,
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
      .then(data => {
        dispatch(turnLoading(false));
        state.navigation.navigate('map');
      })
      .error(err => {
        dispatch(turnLoading(false));
        alert('Error, please check the logs');
        console.error(err);
      });
  };

  return (
    <View>
      <Text>Trash status</Text>
      <Image style={styles.tinyLogo} source={{uri: state.uri}} />
      <Text>
        Location: {state.location.coords.latitude} | {state.location.coords.longitude}
      </Text>
      <Button onPress={addTrash} title="Validate" />
    </View>
  );
};
