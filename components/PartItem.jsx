import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { getPartsImage } from "../RequiredImages";
export default function PartItem({ part }) {
    const partImage = getPartsImage(part.image)
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={partImage}
                resizeMode="contain"
            />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{part.title}</Text>
            </View>
            <View style={styles.qtyContainer}>
                <Text style={styles.qty}>Pcs</Text>
                <Text style={styles.qtyNumber}>{part.qty}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        borderColor: "purple",
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
    },
    image: {
        height: 120,
        width: 120,
        margin: 5,
    },
    titleContainer: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    qtyContainer: {
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    qty: {
        fontSize: 14,
        fontWeight: "600",
    },
    qtyNumber: {
        fontSize: 24,
        fontWeight: "600",
    },
});
