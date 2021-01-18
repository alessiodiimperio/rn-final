import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { routes } from "../Routes";

//Todo: Add useNavigation hook

export default function Header({ isEditing, onEdit }) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Scaffoldings</Text>
            <View style={styles.optionsContainer}>
                <TouchableOpacity onPress={onEdit}>
                    <Feather
                        style={styles.option}
                        name={isEditing ? "check" : "edit"}
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate(routes.addScaffold)}
                >
                    <Feather
                        style={styles.option}
                        name="plus"
                        size={24}
                        color="white"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: "100%",
        flexDirection: "row",
        backgroundColor: "purple",
        alignItems: "center",
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        left: 40,
    },
    optionsContainer: {
        flexDirection: "row",
        width: 100,
        position: "absolute",
        right: 20,
    },
    option: {
        padding: 10,
    },
});
