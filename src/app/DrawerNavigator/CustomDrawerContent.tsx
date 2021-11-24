import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList
} from "@react-navigation/drawer";
import {Image, StyleSheet, Text, View} from "react-native";
import React, {FC} from "react";
import {Nullable} from "../../types";
import {AppTypes} from "../../redux/app/types";
import {Screens} from "../../constants/screens";
import avatar from "../../assets/images/no-photo.png";

interface Props extends DrawerContentComponentProps {
    user: Nullable<AppTypes.UserInfo>
}

export const CustomDrawerContent: FC<Props> = (props) => {
    const {user, ...drawerProps} = props
    const source = user?.photoURL ? {uri: user.photoURL} : avatar
    return (
        <DrawerContentScrollView style={styles.wrapper} {...drawerProps}>
            {user && <DrawerItem label={() => <View style={styles.container}>
                <Image source={source} style={styles.avatar}/>
                <Text style={styles.name}>{user?.displayName}</Text>
            </View>}
                                 onPress={() => drawerProps.navigation.navigate(Screens.PROFILE)}/>}
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 10
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    name: {
        paddingLeft: 10,
        fontWeight: "bold",
        fontSize: 17
    },
    avatar: {
        height: 40,
        width: 40,
        resizeMode: "contain",
        borderRadius: 50,
    }
})
