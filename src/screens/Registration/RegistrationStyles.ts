import {StyleSheet} from "react-native";

export const registrationStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    form: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        paddingBottom: 20,
    },
    input: {
        backgroundColor: "white",
        width: "80%",
        margin: 5,
        padding: 10,
        borderRadius: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        width: "60%",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        padding: 10,
        backgroundColor: "#87b4ff",
        borderRadius: 10,
        flexBasis: "45%",
        alignItems: "center",
    },
    text: {
        fontWeight: "bold",
        color: "#fcfcfc",
        fontSize: 16,
    },
    errorText: {
        color: 'red',
    }
})
