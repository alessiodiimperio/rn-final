import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ScaffoldingDetail({ navigation }) {
    console.log("navigated to detail");
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Button title="Back" onPress={navigation.goBack()}></Button>
                <Text>Detail</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyConten: "center",
        alignItems: "center",
    },
    content: {
        flex: 0.9,
        width: "100%",
    },
});
