import React, { useState } from "react";

import {
    ScrollView,
    Switch,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
    View,
    Image,
    KeyboardAvoidingView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import ScaffBuilder from "../calculators/ScaffBuilder";
import { path } from "../App.js";

export default function AddScaffolding({ navigation }) {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [height, setHeight] = useState("");
    const [heightError, setHeightError] = useState("");
    const [width, setWidth] = useState("");
    const [widthError, setWidthError] = useState("");
    const [stairs, setStairs] = useState(false);
    const [ladders, setLadders] = useState(false);

    const onBack = () => {
        navigation.goBack();
    };

    const toggleStairs = () => setStairs((prev) => !prev);
    const toggleLadders = () => setLadders((prev) => !prev);

    const validateTitle = () => {
        if (!title) {
            setTitleError("Title can not be empty!");
            return false;
        } else {
            setTitleError("");
            return true;
        }
    };

    const validateHeight = () => {
        const validInt = parseInt(height);

        if (validInt == 0 || isNaN(validInt)) {
            setHeightError(`${height} is not valid input...`);
            setHeight("");
            return false;
        } else {
            setHeightError("");
            if (validInt < 2) {
                setHeight("2");
            } else if (validInt > 10) {
                setHeight("10");
            } else {
                setHeight(validInt.toString());
            }
            return true;
        }
    };

    const validateWidth = () => {
        const validFloat = parseFloat(width);

        if (validFloat == 0 || isNaN(validFloat)) {
            setWidthError(`${width} is not valid input...`);
            setWidth("");
            return false;
        } else {
            setWidthError("");

            if (validFloat < 3.07) {
                setWidth("3.07");
            } else if (validFloat > 30.7) {
                setWidth("30.7");
            } else {
                const closestValidWidth = Math.ceil(validFloat / 3.07) * 3.07;
                setWidth(closestValidWidth.toString());
            }
            return true;
        }
    };

    const validFields = () => {
        if (validateWidth() && validateHeight() && validateTitle()) {
            return true;
        } else {
            validateWidth();
            validateHeight();
            validateTitle();
            return false;
        }
    };

    const handleCreate = () => {
        if (validFields()) {
            const scaffOptions = {
                title,
                height,
                width,
                stairs,
                ladders,
                farfromwall: false,
            };

            let scaffold = ScaffBuilder.getScaffoldingObject(scaffOptions);
            navigation.navigate(path.detail);
        }
    };

    const widthHeightExample = require("../assets/OptionsImages/scaffexample.jpg");
    const stairTowerExample = require("../assets/OptionsImages/has-stairs.jpg");
    const accessDeckExample = require("../assets/OptionsImages/has-ladder.jpg");

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "height" : "height"}
        >
            <View style={styles.content}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backBtn} onPress={onBack}>
                        <Feather name="chevron-left" size={24} color="white" />
                        <Text
                            style={{
                                color: "white",
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                        >
                            Back
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView contentContainerStyle={styles.form}>
                    <Image
                        resizeMode="contain"
                        style={styles.sizingExampleImg}
                        source={widthHeightExample}
                    />
                    <View style={styles.formField}>
                        <Text style={styles.formFieldTxt}>Project title:</Text>
                        <TextInput
                            autoCorrect={false}
                            value={title}
                            onEndEditing={validateTitle}
                            onChangeText={(text) => setTitle(text)}
                            style={styles.formTextInput}
                            placeholder="Title..."
                            placeholderTextColor={"purple"}
                        />
                        {titleError !== "" && (
                            <Text style={styles.formError}>{titleError}</Text>
                        )}
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.formFieldTxt}>
                            Top level height: 2-10m
                        </Text>
                        <TextInput
                            keyboardType="number-pad"
                            value={height}
                            onEndEditing={validateHeight}
                            onChangeText={(number) => setHeight(number)}
                            autoCorrect={false}
                            style={styles.formTextInput}
                            placeholderTextColor={"purple"}
                            placeholder="Height in meters..."
                        />
                        {heightError !== "" && (
                            <Text style={styles.formError}>{heightError}</Text>
                        )}
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.formFieldTxt}>
                            Total width: 3-30m
                        </Text>
                        <TextInput
                            keyboardType="number-pad"
                            value={width}
                            onEndEditing={validateWidth}
                            onChangeText={(number) => setWidth(number)}
                            autoCorrect={false}
                            style={styles.formTextInput}
                            placeholderTextColor={"purple"}
                            placeholder="Width in meters..."
                        />
                        {widthError !== "" && (
                            <Text style={styles.formError}>{widthError}</Text>
                        )}
                    </View>
                    <View style={styles.formField}>
                        <View>
                            <Image
                                style={{ height: 200, width: "100%" }}
                                source={stairTowerExample}
                                resizeMode="contain"
                            />
                            <View style={styles.formSwitch}>
                                <Text style={styles.formFieldTxt}>
                                    Include stair tower?
                                </Text>
                                <Switch
                                    value={stairs}
                                    style={{
                                        borderColor: "white",
                                        borderWidth: 1,
                                        borderRadius: 16,
                                    }}
                                    onValueChange={toggleStairs}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.formField}>
                        <Image
                            style={{ height: 200, width: "100%" }}
                            source={accessDeckExample}
                            resizeMode="contain"
                        />
                        <View style={styles.formSwitch}>
                            <Text style={styles.formFieldTxt}>
                                Include internal access decks?
                            </Text>
                            <Switch
                                trackColor="#BCF"
                                value={ladders}
                                style={{
                                    borderColor: "white",
                                    borderWidth: 1,
                                    borderRadius: 16,
                                }}
                                onValueChange={toggleLadders}
                            />
                        </View>
                    </View>
                    <TouchableOpacity onPress={handleCreate}>
                        <View style={styles.createBtn}>
                            <Text
                                style={{
                                    color: "purple",
                                    fontSize: 20,
                                    fontWeight: "600",
                                }}
                            >
                                Create
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
    },
    content: {
        flex: 0.9,
        width: "100%",
        justifyContent: "center",
    },
    header: {
        height: 100,
        backgroundColor: "purple",
        width: "100%",
        justifyContent: "center",
    },
    backBtn: {
        left: 20,
        flexDirection: "row",
        alignItems: "center",
    },
    form: {
        width: "100%",
        alignItems: "center",
    },
    formField: {
        width: "80%",
        backgroundColor: "purple",
        borderRadius: 12,
        justifyContent: "center",
        margin: 5,
        padding: 18,
    },
    formFieldTxt: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        padding: 5,
        paddingLeft: 20,
    },
    formError: {
        color: "white",
        backgroundColor: "red",
        padding: 5,
        marginTop: 10,
    },
    formTextInput: {
        backgroundColor: "lightgrey",
        marginLeft: 20,
        marginRight: 20,
        height: 40,
        fontSize: 16,
        color: "purple",
        padding: 10,
        borderRadius: 12,
    },
    sizingExampleImg: {
        height: 330,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    createBtn: {
        height: 40,
        width: 150,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "purple",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        marginBottom: 50,
    },
    formSwitch: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
});
