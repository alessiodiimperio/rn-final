import React from "react";
import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import {
    TouchableHighlight,
    TouchableOpacity,
} from "react-native-gesture-handler";

export default function ScaffoldListItem({ item, isEditing }) {
    const onPress = () => {
        console.log("list item pressed");
    };
    const onDelete = () => {
        Alert.alert("Delete", "Are you sure you want to delete?", [
            { text: "Delete", onPress: () => console.log("deleting") },
            { text: "Cancel" },
        ]);
    };

    return (
        <TouchableHighlight
            style={styles.container}
            onPress={isEditing ? null : onPress}
            underlayColor="#CFB7EA"
        >
            <>
                <Image />
                <Text
                    style={{
                        ...styles.title,
                        color: isEditing ? "red" : "purple",
                    }}
                >
                    {item.title}
                </Text>
                <View style={styles.optiosContainer}>
                    {isEditing && (
                        <TouchableOpacity onPress={onDelete}>
                            <Feather
                                style={{
                                    ...styles.trash,
                                    color: isEditing ? "red" : "purple",
                                }}
                                name="trash-2"
                                size={24}
                                color="purple"
                            />
                        </TouchableOpacity>
                    )}
                    {!isEditing && (
                        <Feather
                            style={styles.chevron}
                            name="chevron-right"
                            size={24}
                            color="purple"
                        />
                    )}
                </View>
            </>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 80,
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    optiosContainer: {
        flexDirection: "row",
        position: "absolute",
        right: 0,
    },
    title: {
        paddingLeft: 20,
        color: "purple",
        fontSize: 18,
        fontWeight: "bold",
    },
    chevron: { padding: 20 },
    trash: { padding: 30 },
});
