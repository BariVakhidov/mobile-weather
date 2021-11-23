import {StyleSheet} from "react-native";

export const profileStyles = StyleSheet.create({
        container: {
            padding: 30,
            height: '100%',
            width: '100%',
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        },
        photo: {
            flex: 1,
            resizeMode: "contain"
        },
        userInfo: {
            paddingTop: 20,
            flex: 2
        },
        dataItem: {
            width: "100%",
            flexDirection: "row",
        },
        label: {
            fontWeight: "bold",
            paddingRight: 10,
        },
        text: {
            fontSize: 15,
            color: "black",
        },
        buttons: {
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 10,
            borderStyle: 'solid',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
        }
    }
)
