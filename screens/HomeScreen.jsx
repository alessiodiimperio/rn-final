import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Header from "../components/Header";
import ScaffoldingList from "../components/ScaffoldingList";
import CustomButton from "../components/CustomButton";
import { useScaffold } from "../ScaffProvider/ScaffoldProvider";
import { routes } from "../Routes";
import { action } from "../Actions";
import { auth, db } from "../firebase.service";
import { useUser } from "../UserProvider/UserProvider";

export default function HomeScreen({ navigation }) {
    const [{ scaffoldings }, dispatch] = useScaffold();
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useUser();

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const handleDelete = (id) => {
        dispatch({
            action: action.deleteScaffolding,
            payload: id,
        });
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
        auth.signInAnonymously()
            .then(({ user }) => {
                setUser({ uid: user.uid });
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <View style={styles.container}>
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
});
