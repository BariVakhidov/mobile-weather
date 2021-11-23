import React, {FC, memo} from "react";
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import {loginStyles} from "./LoginStyles";
import {loginValidator} from "../../utils/validators/login-validator";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {Screens} from "../../constants/screens";
import {firebaseAuth} from "../../firebase/firebaseAuth";
import {RootStackParamList} from "../../app/DrawerNavigator/DrawerNavigator";

interface Props extends NativeStackScreenProps<RootStackParamList, Screens.LOGIN> {

}

export const Login: FC<Props> = memo(({navigation}) => {
    const onRegisterCLick = () => navigation.navigate(Screens.REGISTER);

    return (
        <KeyboardAvoidingView style={loginStyles.container}>
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={values => {
                    const {email, password} = values;
                    console.log(values);
                    firebaseAuth.signInWithCredentials({email, password}).then(user => user && navigation.replace(Screens.MODELS))
                }}
                validate={loginValidator}
            >
                {({handleChange, handleBlur, handleSubmit, values, errors}) => (
                    <>
                        <View style={loginStyles.form}>
                            <TextInput
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                                style={loginStyles.input}
                                placeholder={"Email"}
                            />
                            <TextInput
                                secureTextEntry
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                style={loginStyles.input}
                                placeholder={"Password"}
                            />
                            {errors.email && <Text style={loginStyles.errorText}>{errors.email}</Text>}
                        </View>
                        <View style={loginStyles.buttonsContainer}>
                            <TouchableOpacity style={loginStyles.button} onPress={handleSubmit}>
                                <Text style={loginStyles.text}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[loginStyles.button, loginStyles.buttonOutlined]}>
                                <Text style={[loginStyles.text, loginStyles.textOutlined]} onPress={onRegisterCLick}>
                                    Register
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </KeyboardAvoidingView>
    );
});
