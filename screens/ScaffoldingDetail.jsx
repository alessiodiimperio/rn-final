import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import ScaffViewer from "../components/ScaffViewer";
import PartsList from "../components/PartsList";
import { Feather } from "@expo/vector-icons";

export default function ScaffoldingDetail({ route, navigation }) {
    const { scaffolding } = route.params;
    const onBack = () => {
        navigation.popToTop();
    };
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                        <Feather name="chevron-left" size={24} color="purple" />
                        <Text
                            style={{
                                color: "purple",
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                        >
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView style={styles.scrollview}>
                    <ScaffViewer scaffolding={scaffolding} />
                    <PartsList scaffolding={scaffolding} />
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purple",
    },
    content: {
        flex: 0.9,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "purple",
    },
    header: {
        height: 100,
        backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        borderColor:'purple',
        borderBottomWidth:1,
    },
    backBtn: {
        left: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    scrollview: {
        flex: 1,
        width: "100%",
    },
});
