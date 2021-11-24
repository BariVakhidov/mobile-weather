import React, {FC, memo} from "react";
import {ActivityIndicator, StyleSheet, View} from "react-native";

interface Props {
    //TODO: styles
}

export const Preloader: FC = memo(() => {
    return (
        <View style={styles.loader}><ActivityIndicator size="large"/></View>
    );
});

const styles = StyleSheet.create({
    loader: {
        zIndex: 5,
        position: "absolute",
        backgroundColor: "rgba(241, 241, 241, 0.64)",
        top: 0,
        right: 0,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
})
