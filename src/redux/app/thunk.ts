import {AppTypes} from "./types";
import {AppThunk} from "../store";
import {appActionCreators} from "./action-creators";
import {firebaseUser} from "../../firebase/firebaseUser";
import {firebaseAuth} from "../../firebase/firebaseAuth";
import {batch} from "react-redux";
import {isFirebaseError} from "../../utils/helpers/isFirebaseError";

export const updateUser = (values: AppTypes.EditableInfo): AppThunk => async (dispatch, getState) => {
    dispatch(appActionCreators.setFetching(true));
    try {
        const user = getState().app.user;
        if (values.email && values.email !== user?.email) {
            await firebaseUser.updateUserEmail(values.email);
        }
        await firebaseUser.updateUserProfile({photoURL: values.photoURL, displayName: values.displayName});
        const updatedUser = firebaseUser.getCurrentUser();
        const {email, phoneNumber, emailVerified, displayName, uid, photoURL} = updatedUser!;
        batch(() => {
            dispatch(appActionCreators.setUser({email, phoneNumber, emailVerified, displayName, uid, photoURL}))
            dispatch(appActionCreators.setFetching(false))
        })
    } catch (e) {
        let error = "Some error has occurred...";
        if (isFirebaseError(e)) {
            error = e.message;
        }
        dispatch(appActionCreators.setError(error))
        dispatch(appActionCreators.setFetching(false))
    }
}

export const signIn = (params: AppTypes.UserAuthParams): AppThunk => async (dispatch) => {
    const {email, password} = params;
    dispatch(appActionCreators.setFetching(true));
    try {
        await firebaseAuth.signInWithCredentials({email, password})
    } catch (e) {
        let error = "Some error has occurred...";
        if (isFirebaseError(e)) {
            error = e.message;
        }
        dispatch(appActionCreators.setError(error))
    } finally {
        dispatch(appActionCreators.setFetching(false));
    }
}

export const signUp = (params: AppTypes.UserAuthParams): AppThunk => async (dispatch) => {
    const {email, password} = params;
    dispatch(appActionCreators.setFetching(true));
    try {
        const user = await firebaseAuth.createUser({email, password})
        console.log(user)
    } catch (e) {
        let error = "Some error has occurred...";
        if (isFirebaseError(e)) {
            error = e.message;
        }
        dispatch(appActionCreators.setError(error))
    } finally {
        dispatch(appActionCreators.setFetching(false));
    }
}

export const signOut = (): AppThunk => async (dispatch) => {
    dispatch(appActionCreators.setFetching(true));
    try {
        await firebaseAuth.signOut()
    } catch (e) {
        let error = "Some error has occurred...";
        if (isFirebaseError(e)) {
            error = e.message;
        }
        dispatch(appActionCreators.setError(error))
    } finally {
        dispatch(appActionCreators.setFetching(false));
    }
}
