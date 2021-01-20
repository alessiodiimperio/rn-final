import React from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import ScaffViewer from "../components/ScaffViewer";
import PartItem from './PartItem'
import PartsInformation from "../components/PartsInformation";

export default function PartsList({ scaffolding, ids }) {

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={scaffolding.parts}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <PartItem part={item} />}
                ListHeaderComponent={
                    ids.length < 2 && <ScaffViewer scaffolding={scaffolding} />
                }
                ListFooterComponent={
                    <PartsInformation parts={scaffolding.parts} />
                }
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
