import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import ScaffoldListItem from "./ScaffoldListItem";

export default function ScaffoldingList({ isEditing, scaffoldings }) {
    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={scaffoldings}
                renderItem={({ item }) => (
                    <ScaffoldListItem
                        key={item.id}
                        item={item}
                        isEditing={isEditing}
                    />
                )}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            width: "100%",
                            height: 1,
                            backgroundColor: "purple",
                        }}
                    />
                )}
                footer={() => (
                    <View
                        style={{
                            width: "100%",
                            height: 1,
                            backgroundColor: "purple",
                        }}
                    />
                )}
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
});
