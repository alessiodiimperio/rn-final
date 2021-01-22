import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ScaffoldingList from "../components/ScaffoldingList";
import CustomButton from "../components/CustomButton";
import { useScaffold } from "../ScaffProvider/ScaffoldProvider";
import { routes } from "../Routes";
import { action } from "../Actions";
import { useFirebase } from "../FirebaseProvider/FirebaseProvider";
import { auth } from "../firebase.service";
export default function HomeScreen({ navigation }) {
    const [{ scaffoldings }, dispatch] = useScaffold();
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const firebase = useFirebase();

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleDelete = async (id) => {
        setIsLoading(true);
        await firebase.deleteScaffolding(id);
        dispatch({
            action: action.deleteScaffolding,
            payload: id,
        });
        setIsLoading(false);
    };

    const displayTotal = () => {
        const ids = [];
        scaffoldings.forEach((scaffold) => {
            ids.push(scaffold.id);
        });
        navigation.navigate(routes.detail, { ids });
    };

    useEffect(() => {
        if (scaffoldings.length == 0) {
            setIsEditing(false);
        }
    }, [scaffoldings]);

    useEffect(() => {
        setIsLoading(true);
        auth.signInAnonymously().then(() => {
            firebase.getScaffoldings().then((scaffoldings) => {
                dispatch({
                    action: action.initialize,
                    payload: scaffoldings,
                });
                setIsLoading(false);
            });
        });
    }, []);
    return (
        <View style={styles.container}>
            {isLoading && (
                <ActivityIndicator
                    style={styles.activity}
                    color="purple"
                    size="large"
                />
            )}
            <View style={styles.content}>
                <Header isEditing={isEditing} onEdit={handleEdit} />
                <ScaffoldingList
                    scaffoldings={scaffoldings}
                    isEditing={isEditing}
                    handleDelete={(id) => handleDelete(id)}
                />
                {scaffoldings.length > 1 && (
                    <CustomButton title="Get Total" onPress={displayTotal} />
                )}
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
        alignItems: "center",
    },
    activity: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 100,
        position: "absolute",
        width: "100%",
        height: "100%",
    },
});
