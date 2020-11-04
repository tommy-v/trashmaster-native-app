import 'react-native-gesture-handler';
import React, { Suspense } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Spinner from 'react-native-loading-spinner-overlay';

// Views
import Map from './screens/Map';
import Camera from './screens/Camera';
import NewTrash from './screens/NewTrash';
import TrashDetails from './screens/TrashDetails';
import Login from './screens/Login';

// Store
import { persistor, store } from './store/configureStore';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AuthListener from './components/AuthListener';

const Stack = createStackNavigator();

const AppContext = () => {
  const globalState = useSelector((state: any) => state.global);

  return (
    <PersistGate loading={null} persistor={persistor}>
      <AuthListener />
      <Spinner visible={globalState.isLoading} />
      <Suspense fallback={null}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen
              name="map"
              component={Map}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="camera" component={Camera} />
            <Stack.Screen name="newTrash" component={NewTrash} />
            <Stack.Screen name="trashDetails" component={TrashDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </Suspense>
    </PersistGate>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <AppContext />
    </Provider>
  );
};
