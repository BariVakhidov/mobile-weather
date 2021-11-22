import React, {FC, memo} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

interface Props {

}

export const Login: FC<Props> = memo(({}) => {
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder={"Email"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Password"}
                />
            </View>
            <View>
                <TouchableOpacity>
                    <Text>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
});

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    input: {
        width: '50%',
        margin: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderStyle: "solid"
    }
})
