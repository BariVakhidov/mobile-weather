import React, {FC, memo, useCallback, useEffect, useState} from "react";
import {Image, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import avatar from "../../assets/images/no-photo.png";
import {profileStyles} from "./ProfileStyles";
import {EditInfo} from "./EditInfo";
import {capitalizeFirstLetter} from "../../utils/helpers/capitalizeFirstLetter";
import {loginStyles} from "../Login/LoginStyles";
import {useIsFocused} from "@react-navigation/native";
import {Preloader} from "../../components/preloader";
import {DataItem} from "./DataItem";
import {signOut} from "../../redux/app/thunk";

export const Profile: FC = memo(() => {
    const {user, isFetching} = useAppSelector(state => state.app)
    const [isEditMode, setEditMode] = useState(false);
    const dispatch = useAppDispatch();

    const onLogoutClick = () => dispatch(signOut());
    const activateEditMode = useCallback(() => setEditMode(true), []);
    const deactivateEditMode = useCallback(() => setEditMode(false), []);
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            return () => {
                deactivateEditMode()
            }
        }
    }, [isFocused])

    if (!user) {
        return null;
    }

    const {uid, emailVerified, ...displayedInfo} = user;
    const source = user.photoURL ? {uri: user.photoURL} : avatar

    return (
        <ScrollView>
            <KeyboardAvoidingView style={profileStyles.container}>
                <Image source={source} style={profileStyles.photo}/>
                {isEditMode
                    ? <EditInfo user={user} onExit={deactivateEditMode}/>
                    : <>
                        <View style={profileStyles.userInfo}>
                            <View>
                                {Object.entries(displayedInfo).map(i => i[1] &&
                                    <DataItem label={capitalizeFirstLetter(i[0])} key={i[0]} text={i[1]}/>)}
                            </View>
                            <View style={profileStyles.buttons}>
                                <TouchableOpacity style={loginStyles.button} onPress={activateEditMode}>
                                    <Text>
                                        EDIT
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={[loginStyles.button, loginStyles.buttonOutlined]} onPress={onLogoutClick}>
                                    <Text>
                                        LOGOUT
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>}
            </KeyboardAvoidingView>
            {isFetching && <Preloader/>}
        </ScrollView>
    );
});
