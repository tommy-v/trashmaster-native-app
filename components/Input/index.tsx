import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  borderColor: string;
  color: string;
}

export default function Input(props: Props) {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      borderRadius: 30,
      borderWidth: 1,
      width: 300,
      paddingLeft: 20,
      borderColor: props.borderColor,
      color: props.color,
    },
  });

  return (
    <TextInput style={styles.input} {...props} placeholderTextColor="gray" />
  );
}
