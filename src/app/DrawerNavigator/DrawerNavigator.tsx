import React, {FC, memo} from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {Screens} from "../../constants/screens";
import {Models} from "../../screens/Models";
import {Home} from "../Home";
import {Login} from "../../screens/Login";
import {Registration} from "../../screens/Registration";
import {NavigationContainer} from "@react-navigation/native";
import {Nullable} from "../../types";
import {AppTypes} from "../../redux/app/types";
import {Profile} from "../../screens/Profile";
import {CustomDrawerContent} from "./CustomDrawerContent";

export type RootStackParamList = {
    Home: undefined;
    Models: undefined;
    Chat: undefined;
    Login: undefined;
    Register: undefined;
    Profile: undefined;
}

const Drawer = createDrawerNavigator<RootStackParamList>();

interface Props {
    user: Nullable<AppTypes.UserInfo>;
}

export const DrawerNavigator: FC<Props> = memo(({user}) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName={Screens.HOME}
                              drawerContent={(props) => <CustomDrawerContent {...props} user={user}/>}>
                {user
                    ? (
                        <>
                            <Drawer.Screen name={Screens.PROFILE} component={Profile}/>
                            <Drawer.Screen name={Screens.MODELS} component={Models}/>
                            <Drawer.Screen options={{headerShown: false}} name={Screens.HOME} component={Home}/>
                        </>
                    )
                    : (
                        <>
                            <Drawer.Screen name={Screens.LOGIN} component={Login}/>
                            <Drawer.Screen name={Screens.REGISTER} component={Registration}/>
                        </>
                    )
                }
            </Drawer.Navigator>
        </NavigationContainer>
    );
});

