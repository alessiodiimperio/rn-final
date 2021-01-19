import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Header from "../components/Header";
import ScaffoldingList from "../components/ScaffoldingList";
import CustomButton from '../components/CustomButton'
import { useStateValue } from '../StateProvider'
import { routes } from '../Routes'

export default function HomeScreen({ navigation }) {
    const [{ scaffoldings }, dispatch] = useStateValue();
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing((prev) => !prev);
    };

    const displayTot = () => {
        const total = {}; 
        /* scaffoldings.forEach((scaffold) => {
            for (let [key, value] of Object.entries(scaffold)) {
                if (total[key] && typeof total[key] == Number) {
                    result[key] += value;
                } else {
                    result[key] = value;
                }
            }
        }); */
        console.log(total)
    };


    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Header isEditing={isEditing} onEdit={handleEdit} />
                <ScaffoldingList
                    scaffoldings={scaffoldings}
                    isEditing={isEditing}
                />
                <CustomButton title="Get Total" onPress={displayTot} />
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
        alignItems:'center',
    },
});
