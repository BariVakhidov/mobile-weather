import {StyleSheet} from "react-native";

export const profileStyles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "space-between",
            alignItems: "center",
            margin: 22,
        },
        photo: {
            height: 250,
            width: 250,
            resizeMode: "contain",
            borderRadius: 30,
        },
        userInfo: {
            paddingTop: 20,
            width: "100%",
            paddingBottom: 20,
            justifyContent: "space-between"
        },
        dataItem: {
            padding: 10,
            marginBottom: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "white",

            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.20,
            shadowRadius: 1.41,

            elevation: 2
        },
        label: {
            fontWeight: "bold",
            paddingRight: 10,
            flexShrink: 0,
        },
        text: {
            fontSize: 15,
            color: "black",
            flexShrink: 1,
        },
        buttons: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
        },
        button: {
            padding: 10,
            backgroundColor: "#87b4ff",
            borderRadius: 10,
            flexBasis: "25%",
            alignItems: "center",
        },
        input: {
            backgroundColor: "white",
            margin: 5,
            padding: 10,
            borderRadius: 10,
        },
        formItem: {
            paddingBottom: 10,
        }
    }
)
