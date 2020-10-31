import React, {useState} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'types/global';

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
  const {control, handleSubmit, errors} = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    state.navigation.navigate('map');
  };

  return (
    <View>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            // style={styles.input}
            onBlur={onBlur}
            onChangeText={(valueText: string) => onChange(valueText)}
            value={value}
            placeholder="Email"
          />
        )}
        name="firstName"
        rules={{required: true}}
        defaultValue=""
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <TextInput
            // style={styles.input}
            onBlur={onBlur}
            onChangeText={(valueText: string) => onChange(valueText)}
            value={value}
            placeholder="Password"
          />
        )}
        name="lastName"
        defaultValue=""
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}
