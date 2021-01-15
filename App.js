import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AddScaffolding from "./screens/AddScaffolding";
import ScaffoldingDetail from "./screens/ScaffoldingDetail";
import { mockState } from "./mockData";

const Stack = createStackNavigator();

export const path = {
    home: "HOME",
    addScaffold: "ADDSCAFFOLD",
    detail: "DETAIL",
};

export default function App() {
    const [state, setState] = useState(mockState);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={path.home}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name={path.home} component={HomeScreen} />
                <Stack.Screen
                    name={path.addScaffold}
                    component={AddScaffolding}
                />
                <Stack.Screen
                    name={path.detail}
                    component={ScaffoldingDetail}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    content: {
        width: "100%",
        flex: 0.9,
    },
});
