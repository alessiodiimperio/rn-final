import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ScaffoldingList from "../components/ScaffoldingList";

export default function HomeScreen({ navigation }) {
    const [isEditing, setIsEditing] = useState(false);
    const [state, setState] = useState({});

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header
                    isEditing={isEditing}
                    onEdit={handleEdit}
                />
                <ScaffoldingList
                    scaffoldings={state.scaffoldings}
                    isEditing={isEditing}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
    },
    content: {
        flex: 0.9,
        width: "100%",
    },
});
