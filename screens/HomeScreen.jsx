import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ScaffoldingList from "../components/ScaffoldingList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { path } from "../App.js";

export default function HomeScreen({ navigation }) {
    const [isEditing, setIsEditing] = useState(false);
    const [state, setState] = useState({});

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleAdd = () => {
        navigation.navigate(path.addScaffold);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header
                    isEditing={isEditing}
                    onAdd={handleAdd}
                    onEdit={handleEdit}
                />
                <ScaffoldingList
                    scaffoldings={state.scaffoldings}
                    isEditing={isEditing}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
    content: {
        flex: 0.9,
        width: "100%",
    },
});
