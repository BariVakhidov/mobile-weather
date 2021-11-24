import React, {FC, memo} from "react";
import {AppTypes} from "../../redux/app/types";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
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
        <View style={profileStyles.userInfo}>
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
                {({handleChange, handleBlur, handleSubmit, values}) => (
                    <>
                        <View>
                            {Object.keys(editableInfo).map(key => <View style={profileStyles.formItem} key={key}>
                                <Text>
                                    {capitalizeFirstLetter(key)}
                                </Text>
                                <TextInput
                                    multiline={true}
                                    onChangeText={handleChange(key)}
                                    onBlur={handleBlur(key)}
                                    value={values[key as keyof typeof editableInfo]}
                                    style={profileStyles.input}
                                    placeholder={capitalizeFirstLetter(key)}
                                />
                            </View>)}
                        </View>
                        <View style={profileStyles.buttons}>
                            <TouchableOpacity style={loginStyles.button} onPress={handleSubmit}>
                                <Text>
                                    SAVE
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[loginStyles.button, loginStyles.buttonOutlined]} onPress={onExit}>
                                <Text>
                                    CANCEL
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    );
});
