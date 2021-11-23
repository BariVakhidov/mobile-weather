import React, {FC, memo, useCallback, useState} from "react";
import {ActivityIndicator, Button, Image, KeyboardAvoidingView, Text, View} from "react-native";
import {useAppSelector} from "../../redux/store";
import avatar from "../../assets/images/no-photo.png";
import {profileStyles} from "./ProfileStyles";
import {EditInfo} from "./EditInfo";
import {capitalizeFirstLetter} from "../../utils/helpers/capitalizeFirstLetter";
import {styles} from "../../app/AppStyles";

export const Profile: FC = memo(() => {
    const [isEditMode, setEditMode] = useState(false);
    const {user, isFetching} = useAppSelector(state => state.app)
    const activateEditMode = useCallback(() => setEditMode(true), []);
    const deactivateEditMode = useCallback(() => setEditMode(false), []);

    if (!user) {
        return null;
    }

    const {uid, emailVerified, ...displayedInfo} = user;
    const source = user.photoURL ? {uri: user.photoURL} : avatar
    return (
        <KeyboardAvoidingView style={profileStyles.container}>
            <Image source={source} style={profileStyles.photo}/>
            {isEditMode
                ? <EditInfo user={user} onExit={deactivateEditMode}/>
                : <>
                    <View style={profileStyles.userInfo}>
                        {Object.entries(displayedInfo).map(i => i[1] &&
                            <DataItem label={capitalizeFirstLetter(i[0])} key={i[0]} text={i[1]}/>)}
                    </View>
                    <Button onPress={activateEditMode} title={"Edit"}/>
                </>}
            {isFetching && <View style={styles.loader}><ActivityIndicator size="large"/></View>}
        </KeyboardAvoidingView>
    );
});

interface DataItemProps {
    text: string;
    label: string;
}

const DataItem: FC<DataItemProps> = ({label, text}) => {
    return <View style={profileStyles.dataItem}>
        <Text style={[profileStyles.label, profileStyles.text]}>{label}:</Text>
        <Text style={profileStyles.text}>{text}</Text>
    </View>
}
