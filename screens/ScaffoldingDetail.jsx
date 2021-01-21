import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import PartsList from "../components/PartsList";
import PartsInformation from "../components/PartsInformation";
import { useScaffold } from "../ScaffProvider/ScaffoldProvider";
import { Feather } from "@expo/vector-icons";

export default function ScaffoldingDetail({ route, navigation }) {
    const { ids } = route.params;
    const [{ scaffoldings }, dispatch] = useScaffold();

    const reduceScaffolding = () => {
        if (ids.length > 1) {
            let parts = [];
            let scaffolding;

            ids.forEach((id) => {
                const scaffold = scaffoldings.find(
                    (scaffold) => scaffold.id == id
                );
                scaffold.parts.forEach((part) => {
                    if (parts.some((item) => item.tag === part.tag)) {
                        let index = parts.findIndex(
                            (item) => item.tag === part.tag
                        );
                        parts[index].qty += part.qty;
                    } else {
                        parts.push(part);
                    }
                });
                scaffolding = scaffold;
            });
            return { ...scaffolding, parts };
        } else {
            return scaffoldings.find(
                (scaffold) => scaffold.id == ids.find((id) => true)
            );
        }
    };

    const scaffolding = reduceScaffolding();

    const onBack = () => {
        navigation.popToTop();
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                        <Feather name="chevron-left" size={24} color="white" />
                        <Text style={styles.headerTitle}>Back</Text>
                    </TouchableOpacity>
                </View>
                <PartsList scaffolding={scaffolding} ids={ids} />
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
    },
    content: {
        flex: 0.9,
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    header: {
        height: 100,
        backgroundColor: "purple",
        width: "100%",
        justifyContent: "center",
        borderColor: "purple",
        borderBottomWidth: 1,
    },
    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
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
