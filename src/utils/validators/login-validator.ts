import {FormikErrors} from "formik";

export interface LoginFormValues {
    email: string;
    password: string;
}

export const loginValidator = (values: LoginFormValues): FormikErrors<LoginFormValues> => {
    const errors: FormikErrors<LoginFormValues> = {};
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
    return errors;
}
