import React, {FC} from "react";
import {Text, View} from "react-native";
import {profileStyles} from "./ProfileStyles";

interface DataItemProps {
    text: string;
    label: string;
}

export const DataItem: FC<DataItemProps> = ({label, text}) => {
    return <View style={profileStyles.dataItem}>
        <Text style={[profileStyles.text, profileStyles.label]}>{label}</Text>
        <Text style={profileStyles.text}>{text}</Text>
    </View>
}
