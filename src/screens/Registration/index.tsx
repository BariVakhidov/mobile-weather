import React, {FC, memo} from "react";
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {Screens} from "../../constants/screens";
import {registrationStyles} from "./RegistrationStyles";
import {RootStackParamList} from "../../app/DrawerNavigator/DrawerNavigator";
import {registrationValidator} from "../../utils/validators/registration-validator";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {signUp} from "../../redux/app/thunk";
import {Preloader} from "../../components/preloader";

interface Props extends NativeStackScreenProps<RootStackParamList, Screens.REGISTER> {

}

export const Registration: FC<Props> = memo(() => {
    const {isFetching} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch();
    return (
        <KeyboardAvoidingView style={registrationStyles.container}>
            <Formik
                initialValues={{email: "", password: "", repeatedPassword: ""}}
                onSubmit={values => {
                    const {email, password} = values;
                    dispatch(signUp({email, password}))
                }}
                validate={registrationValidator}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <>
                        <View style={registrationStyles.form}>
                            <TextInput
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                style={registrationStyles.input}
                                placeholder={"Email"}
                            />
                            <TextInput
                                secureTextEntry
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                style={registrationStyles.input}
                                placeholder={"Password"}
                            />
                            <TextInput
                                secureTextEntry
                                onChangeText={handleChange("repeatedPassword")}
                                onBlur={handleBlur("repeatedPassword")}
                                value={values.repeatedPassword}
                                style={registrationStyles.input}
                                placeholder={"Repeat password"}
                            />
                            {errors.email && <Text style={registrationStyles.errorText}>{errors.email}</Text>}
                            {errors.repeatedPassword &&
                            <Text style={registrationStyles.errorText}>{errors.repeatedPassword}</Text>}
                        </View>
                        <View style={registrationStyles.buttonsContainer}>
                            <TouchableOpacity style={registrationStyles.button}>
                                <Text style={registrationStyles.text} onPress={handleSubmit}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
            {isFetching && <Preloader/>}
        </KeyboardAvoidingView>
    );
});
