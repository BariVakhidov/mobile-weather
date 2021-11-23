import React, {FC, memo} from "react";
import {AppTypes} from "../../redux/app/types";
import {Button, KeyboardAvoidingView, Text, TextInput, View} from "react-native";
import {profileStyles} from "./ProfileStyles";
import {loginStyles} from "../Login/LoginStyles";
import {Formik} from "formik";
import {capitalizeFirstLetter} from "../../utils/helpers/capitalizeFirstLetter";
import {useAppDispatch} from "../../redux/store";
import {updateUser} from "../../redux/app/thunk";

interface Props {
    user: AppTypes.UserInfo;
    onExit: () => void;
}

export const EditInfo: FC<Props> = memo(({user, onExit}) => {
    const {email, displayName, photoURL} = user;
    const editableInfo = {email, displayName, photoURL};
    const dispatch = useAppDispatch();
    return (
        <KeyboardAvoidingView style={profileStyles.userInfo}>
            <Formik
                initialValues={{
                    email: email || "",
                    displayName: displayName || "",
                    photoURL: photoURL || ""
                }}
                onSubmit={values => {
                    dispatch(updateUser(values));
                    onExit()
                }}

            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <>
                        <View>
                            {Object.keys(editableInfo).map(key => <View key={key}>
                                <Text>
                                    {capitalizeFirstLetter(key)}
                                </Text>
                                <TextInput
                                    onChangeText={handleChange(key)}
                                    onBlur={handleBlur(key)}
                                    value={values[key as keyof typeof editableInfo]}
                                    style={loginStyles.input}
                                    placeholder={capitalizeFirstLetter(key)}
                                />
                            </View>)}
                        </View>
                        <View style={profileStyles.buttons}>
                            <Button title={"Save"} onPress={handleSubmit}/>
                            <Button title={"Cancel"} onPress={onExit}/>
                        </View>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
});
