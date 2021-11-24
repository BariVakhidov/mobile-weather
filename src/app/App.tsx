import React, {FC, useEffect} from "react";
import {Alert, SafeAreaView,} from "react-native";
import {onAuthStateChanged} from "firebase/auth";
import {appAuth} from "../firebase";
import {AppTypes} from "../redux/app/types";
import {useAppDispatch, useAppSelector} from "../redux/store";
import {appActionCreators} from "../redux/app/action-creators";
import {DrawerNavigator} from "./DrawerNavigator/DrawerNavigator";

export const App: FC = (() => {
    const {user, error} = useAppSelector(state => state.app)
    const dispatch = useAppDispatch();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(appAuth, user => {
            let userInfo: AppTypes.UserInfo | null = null;
            if (user) {
                const {email, phoneNumber, emailVerified, displayName, uid, photoURL} = user;
                userInfo = {email, phoneNumber, emailVerified, displayName, uid, photoURL}
            }
            dispatch(appActionCreators.setUser(userInfo))
        })
        return unsubscribe;
    }, [])

    useEffect(() => {
        if (error) {
            Alert.alert(
                "Alert!",
                error,
                [{text: "OK", onPress: () => dispatch(appActionCreators.setError(null))}]
            )
        }
    }, [error])

    return (
        <SafeAreaView style={{height: "100%"}}>
            <DrawerNavigator user={user}/>
        </SafeAreaView>
    );
});
