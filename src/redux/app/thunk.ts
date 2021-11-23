import {AppTypes} from "./types";
import {AppThunk} from "../store";
import {appActionCreators} from "./action-creators";
import {firebaseUser} from "../../firebase/firebaseUser";

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
        dispatch(appActionCreators.setUser({email, phoneNumber, emailVerified, displayName, uid, photoURL}))
    } catch (e) {
        dispatch(appActionCreators.setError(e));
    } finally {
        dispatch(appActionCreators.setFetching(false))
    }
}
