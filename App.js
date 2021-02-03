import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScaffoldProvider } from './ScaffProvider/ScaffoldProvider';
import { routes } from './Routes';
import HomeScreen from './screens/HomeScreen';
import AddScaffolding from './screens/AddScaffolding';
import ScaffoldingDetail from './screens/ScaffoldingDetail';
import { FirebaseProvider } from './FirebaseProvider/FirebaseProvider';

const Stack = createStackNavigator();

console.log('App Initializing...');
export default function App() {
  return (
    <ScaffoldProvider>
      <FirebaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName={routes.home}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name={routes.home} component={HomeScreen} />

            <Stack.Screen
              name={routes.addScaffold}
              component={AddScaffolding}
            />

            <Stack.Screen name={routes.detail} component={ScaffoldingDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseProvider>
    </ScaffoldProvider>
  );
}
