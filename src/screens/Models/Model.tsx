import React, {FC, memo} from "react";
import {styles} from "../../app/AppStyles";
import {Image, Text, View} from "react-native";


interface ModelProps {
    imageUrl: string;
    name: string;
}

export const Model: FC<ModelProps> = memo(({name, imageUrl}) => {
    return (
        <View style={styles.model}>
            <Image style={styles.image} source={{uri: imageUrl}}/>
            <Text style={styles.item}>{name}</Text>
        </View>
    );
});
