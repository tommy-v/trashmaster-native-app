// Libs
import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { RootStackParamList } from 'types/global';
import { StackNavigationProp } from '@react-navigation/stack';

// Components
import { Text, View, StyleSheet, Image } from 'react-native';
import Input from '../components/Input';
import { Inset, Stack } from 'react-native-spacing-system';

import { Theme } from '@react-navigation/native/lib/typescript/src/types';
import SimpleButton from '../components/SimpleButton';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'login'
>;
interface Props {
  navigation: LoginScreenNavigationProp;
}

export default function Login(props: Props) {
  const [state] = useState({
    navigation: props.navigation,
  });
  const { colors }: Theme = useTheme();
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    state.navigation.navigate('map');
  };

  return (
    <View style={styles.container}>
      <Inset all={100}>
        <Image
          style={styles.logo}
          source={require('../assets/docs/trash-ios-app-icon.png')}
        />
      </Inset>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            onBlur={onBlur}
            onChangeText={(valueText: string) => onChange(valueText)}
            value={value}
            placeholder="Email"
            borderColor={colors.primary}
            color={colors.text}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      <Stack size={8} />
      {errors.email && (
        <Text style={{ color: colors.notification }}>Email required</Text>
      )}
      <Stack size={16} />
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <Input
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={(valueText: string) => onChange(valueText)}
            value={value}
            placeholder="Password"
            borderColor={colors.primary}
            color={colors.text}
          />
        )}
        name="password"
        defaultValue=""
        rules={{ required: true }}
      />
      <Stack size={8} />
      {errors.password && (
        <Text style={{ color: colors.notification }}>Password required</Text>
      )}
      <Stack size={16} />
      <SimpleButton
        title="Login"
        onPress={handleSubmit(onSubmit)}
        backgroundColor={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});
