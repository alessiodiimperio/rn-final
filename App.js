import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AddScaffolding from "./screens/AddScaffolding";
import ScaffoldingDetail from "./screens/ScaffoldingDetail";
import { StateProvider } from './StateProvider'
import {initialState, reducer } from './Reducer'
import { routes } from "./Routes";

const Stack = createStackNavigator();

export default function App() {

    return (
        <StateProvider reducer={reducer} initialState={initialState}>
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
                    <Stack.Screen
                        name={routes.detail}
                        component={ScaffoldingDetail}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </StateProvider>
    );
}
