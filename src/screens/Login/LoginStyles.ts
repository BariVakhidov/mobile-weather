import {StyleSheet} from "react-native";

export const loginStyles = StyleSheet.create({
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
        justifyContent: "space-between",
    },
    button: {
        padding: 10,
        backgroundColor: "#87b4ff",
        borderRadius: 10,
        flexBasis: "45%",
        alignItems: "center",
    },
    buttonOutlined: {
        backgroundColor: "white",
        borderColor: "#87b4ff",
        borderWidth: 1,
    },
    text: {
        fontWeight: "bold",
        color: "#fcfcfc",
        fontSize: 16,
    },
    textOutlined: {
        color: "#87b4ff",
    },
     errorText: {
        color: 'red',
     }
})
