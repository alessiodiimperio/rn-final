import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import PartItem from './PartItem'

export default function PartsList({ scaffolding }) {
    const { parts } = scaffolding;

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={parts}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <PartItem part={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
    },
    list: {
        flex: 1,
        width: "100%",
    },
});
