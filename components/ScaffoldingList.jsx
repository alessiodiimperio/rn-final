import React from "react";
import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ScaffoldListItem from "./ScaffoldListItem";

export default function ScaffoldingList({
    isEditing,
    scaffoldings,
    handleDelete,
}) {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={scaffoldings}
                renderItem={({ item }) => (
                    <ScaffoldListItem
                        item={item}
                        isEditing={isEditing}
                        handleDelete={handleDelete}
                    />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                footer={() => <View style={styles.separator} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
    list: {
        width: "100%",
        flex: 1,
    },
    separator: {
        width: "100%",
        height: 1,
        backgroundColor: "purple",
    },
});
