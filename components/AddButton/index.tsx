import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  action: () => void;
}

export default function AddButton(props: Props): JSX.Element {
  return (
    <TouchableOpacity onPress={props.action} style={[styles.addButton]}>
      <Icon name="ios-add-circle" size={85} color="rgba(255,255,255,0.7)" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addButton: {
    marginBottom: 40,
  },
});
