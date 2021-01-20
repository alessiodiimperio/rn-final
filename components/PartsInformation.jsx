import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons"; 
import { FontAwesome5 } from "@expo/vector-icons"; 
export default function PartsInformation({ parts }) {
    const numberOfParts = parts.reduce((acc, curr) => {
        return (acc += curr.qty);
    }, 0);
    const totalWeight = parts.reduce((acc, curr) => {
        return (acc += curr.qty * curr.unit_kg_weight);
    }, 0);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Octicons name="tools" size={24} color="black" />
                <Text style={styles.text}>Total parts count: {numberOfParts} Pcs</Text>
            </View>
            <View style={styles.infoContainer}>
                <FontAwesome5 name="weight-hanging" size={24} color="black" />
                <Text style={styles.text}>
                    Total parts weight: {totalWeight.toFixed(2)} Kg
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { height: 150, width: "100%", backgroundColor:'white', justifyContent:'center', alignItems:'center' },
    infoContainer:{
        width:'70%',
        flexDirection:'row',
        justifyContent:'space-between',
    },
    text:{fontSize:18, fontWeight:'bold'},
});
