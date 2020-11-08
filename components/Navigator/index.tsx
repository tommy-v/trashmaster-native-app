import React from 'react';
import AppTheme from '../../theme';
import { UserState } from 'store/user/types';
import { RootState } from 'store/types';

// Views
import Map from '../../screens/Map';
import Camera from '../../screens/Camera';
import NewTrash from '../../screens/NewTrash';
import TrashDetails from '../../screens/TrashDetails';
import Login from '../../screens/Login';
import { useSelector } from 'react-redux';

// Components
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../screens/SplashScreen';

const Stack = createStackNavigator();

export default function Navigator() {
  const userState: UserState = useSelector((state: RootState) => state.user);

  if (!userState.profileLoaded) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>
        {userState.uid === '' ? (
          <Stack.Screen
            name="login"
            component={Login}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="map"
              component={Map}
              options={{ headerShown: false }}
              // (options) animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            />
            <Stack.Screen name="camera" component={Camera} />
            <Stack.Screen name="newTrash" component={NewTrash} />
            <Stack.Screen name="trashDetails" component={TrashDetails} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
