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
import CustomButton from "../components/CustomButton";
import ScaffViewer from "../components/ScaffViewer";
import { routes } from "../Routes.js";
import { useScaffold } from "../ScaffProvider/ScaffoldProvider";
import { useForm } from "../FormHook/useForm";
import { action, field } from "../Actions";
import { stairTowerExample, accessDeckExample } from "../RequiredImages";

export default function AddScaffolding({ navigation }) {
    const [_, dispatch] = useScaffold();
    const [form, formHandler] = useForm();
    const [missingFields, setMissingFields] = useState(false);

    const onBack = () => {
        navigation.goBack();
    };

    const validFields = () => {
        if (form.validHeight && form.validWidth && form.validTitle) {
            return true;
        } else {
            return false;
        }
    };

    const handleCreate = () => {
        if (validFields()) {
            setMissingFields(false);
            const scaffOptions = {
                title: form.title,
                height: parseInt(form.height),
                width: parseFloat(form.width),
                stairs: form.stairs,
                ladders: form.ladders,
                farfromwall: false,
            };

            let scaffolding = ScaffBuilder.getScaffoldingObject(scaffOptions);
            dispatch({
                action: action.addScaffolding,
                payload: scaffolding,
            });
            navigation.navigate(routes.detail, { ids: [scaffolding.id] });
        } else {
            setMissingFields(true);
        }
    };

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
                    <ScaffViewer />
                    <View style={styles.formField}>
                        <Text style={styles.formFieldTxt}>Project title:</Text>
                        <TextInput
                            autoCorrect={false}
                            value={form.title}
                            onChangeText={(text) =>
                                formHandler({
                                    change: field.title,
                                    payload: text,
                                })
                            }
                            style={styles.formTextInput}
                            placeholder="Title..."
                            placeholderTextColor={"purple"}
                        />
                        {form.titleError && (
                            <Text style={styles.formError}>
                                {form.titleError}
                            </Text>
                        )}
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.formFieldTxt}>
                            Top level height: 2-10m
                        </Text>
                        <TextInput
                            keyboardType="number-pad"
                            value={form.height}
                            onChangeText={(text) =>
                                formHandler({
                                    change: field.height,
                                    payload: text,
                                })
                            }
                            onEndEditing={() =>
                                formHandler({
                                    change: field.adjustHeight,
                                    payload: form.height,
                                })
                            }
                            autoCorrect={false}
                            style={styles.formTextInput}
                            placeholderTextColor={"purple"}
                            placeholder="Height in meters..."
                        />
                        {form.heightError ? (
                            <Text style={styles.formError}>
                                {form.heightError}
                            </Text>
                        ) : null}
                    </View>
                    <View style={styles.formField}>
                        <Text style={styles.formFieldTxt}>
                            Total width: 3-30m
                        </Text>
                        <TextInput
                            keyboardType="number-pad"
                            value={form.width}
                            onEndEditing={() =>
                                formHandler({
                                    change: field.adjustWidth,
                                    payload: form.width,
                                })
                            }
                            onChangeText={(text) =>
                                formHandler({
                                    change: field.width,
                                    payload: text,
                                })
                            }
                            autoCorrect={false}
                            style={styles.formTextInput}
                            placeholderTextColor={"purple"}
                            placeholder="Width in meters..."
                        />
                        {form.widthError ? (
                            <Text style={styles.formError}>
                                {form.widthError}
                            </Text>
                        ) : null}
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
                                    value={form.stairs}
                                    style={{
                                        borderColor: "white",
                                        borderWidth: 1,
                                        borderRadius: 16,
                                    }}
                                    onValueChange={() =>
                                        formHandler({ change: field.stairs })
                                    }
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
                                value={form.ladders}
                                style={{
                                    borderColor: "white",
                                    borderWidth: 1,
                                    borderRadius: 16,
                                }}
                                onValueChange={() =>
                                    formHandler({ change: field.ladders })
                                }
                            />
                        </View>
                    </View>
                    {missingFields && (
                        <Text style={styles.errorTxt}>
                            One of more fields is empty
                        </Text>
                    )}
                    <CustomButton title="Create" onPress={handleCreate} />
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
        fontSize: 14,
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
    formSwitch: {
        paddingTop: 10,
        flexDirection: "row",
        justifyContent: "space-evenly",
        width: "100%",
    },
    errorTxt: {
        backgroundColor: "red",
        color: "white",
        padding: 5,
    },
});
