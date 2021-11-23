import React, {FC, useState} from "react";
import {useAppSelector} from "../redux/store";
import {Button, StatusBar, Text, useColorScheme, View} from "react-native";
import {firebaseAuth} from "../firebase/firebaseAuth";
import {styles} from "./AppStyles";
import {Screens} from "../constants/screens";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {RootStackParamList} from "./DrawerNavigator/DrawerNavigator";

type HomeProps = NativeStackScreenProps<RootStackParamList, Screens.HOME>
export const Home: FC<HomeProps> = ({navigation}) => {
    const [count, setCount] = useState(0);
    const {user} = useAppSelector(state => state.app)
    const isDarkMode = useColorScheme() === "dark";

    return <View>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"}/>
        <View style={{height: "100%"}}>
            {user && <Button onPress={() => firebaseAuth.signOut()} title={"Logout"}/>}
            <Text style={styles.bigTextStyle}>People, who like Romachka:</Text>
            <Text style={styles.bigTextStyle}>{count}</Text>
            <View style={styles.space}>
                <Button
                    title={"increment"}
                    onPress={() => setCount(prevState => prevState + 1)}
                />
                <Button
                    title={"decrement"}
                    onPress={() => setCount(prevState => prevState - 1)}
                />
            </View>
            <Button
                title={"Models"}
                onPress={() => navigation.navigate(Screens.MODELS)}
            />
            <Button
                title={"Chat"}
                onPress={() => navigation.navigate(Screens.CHAT)}
            />
            {!user && <Button
                title={"Login"}
                onPress={() => navigation.navigate(Screens.LOGIN)}
            />}
        </View>
    </View>

}
