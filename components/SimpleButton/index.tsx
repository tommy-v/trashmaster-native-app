import React from 'react';
import { StyleSheet, Text, ButtonProps } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends ButtonProps {
  backgroundColor: string;
  textColor?: string;
}

export default function SimpleButton(props: Props) {
  const styles = StyleSheet.create({
    button: {
      borderRadius: 40,
      paddingHorizontal: 20,
      minWidth: 120,
      height: 45,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.backgroundColor,
    },
    text: {
      color: props.textColor ? props.textColor : 'white',
    },
  });

  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}
