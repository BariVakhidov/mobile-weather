import React, {FC, memo} from "react";
import {KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from "react-native";
import {Formik} from "formik";
import {loginValidator} from "../../utils/validators/login-validator";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {Screens} from "../../constants/screens";
import {firebaseAuth} from "../../firebase/firebaseAuth";
import {registrationStyles} from "./RegistrationStyles";
import {RootStackParamList} from "../../app/DrawerNavigator/DrawerNavigator";

interface Props extends NativeStackScreenProps<RootStackParamList, Screens.LOGIN> {

}

export const Registration: FC<Props> = memo(({navigation}) => {
    const onRegisterCLick = () => navigation.navigate(Screens.REGISTER);

    return (
        <KeyboardAvoidingView style={registrationStyles.container}>
            <Formik
                initialValues={{email: "", password: ""}}
                onSubmit={values => {
                    const {email, password} = values;
                    console.log(values);
                    firebaseAuth.createUser({email, password}).then(user => user && navigation.replace(Screens.MODELS))
                }}
                validate={loginValidator}
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
                                onChangeText={handleChange("password")}
                                onBlur={handleBlur("password")}
                                value={values.password}
                                style={registrationStyles.input}
                                placeholder={"Password"}
                            />
                            {errors.email && <Text style={registrationStyles.errorText}>{errors.email}</Text>}
                        </View>
                        <View style={registrationStyles.buttonsContainer}>
                            <TouchableOpacity style={registrationStyles.button}>
                                <Text style={registrationStyles.text} onPress={onRegisterCLick}>
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
