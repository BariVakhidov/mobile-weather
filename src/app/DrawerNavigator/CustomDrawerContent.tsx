import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {Text, View} from "react-native";
import React, {FC} from "react";
import {Nullable} from "../../types";
import {AppTypes} from "../../redux/app/types";
import {Screens} from "../../constants/screens";

interface Props extends DrawerContentComponentProps {
    user: Nullable<AppTypes.UserInfo>
}

export const CustomDrawerContent: FC<Props> = (props) => {
    const {user, ...drawerProps} = props
    return (
        <DrawerContentScrollView {...drawerProps}>
            <DrawerItem label={() => <View>
                <Text>{user?.email}</Text>
            </View>}
                        onPress={() => drawerProps.navigation.navigate(Screens.PROFILE)}/>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}
