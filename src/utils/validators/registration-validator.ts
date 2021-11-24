import {FormikErrors} from "formik";

export interface RegistrationFormValues {
    email: string;
    password: string;
    repeatedPassword: string;
}

export const registrationValidator = (values: RegistrationFormValues): FormikErrors<RegistrationFormValues> => {
    const errors: FormikErrors<RegistrationFormValues> = {};
    if (!values.email) {
        errors.email = "Email required";
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = "Invalid email address";
    }
    if (!values.password) {
        errors.password = "Password required";
    }
    if (values.password !== values.repeatedPassword) {
        errors.repeatedPassword = "Passwords must be the same"
    }
    return errors;
}
