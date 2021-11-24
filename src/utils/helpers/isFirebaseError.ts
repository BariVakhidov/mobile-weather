import firebase from "firebase/compat";

export const isFirebaseError = (error: any): error is firebase.auth.Error => {
    return typeof error.message === 'string';
}
