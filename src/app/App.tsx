import React, {FC, memo, useState} from "react";
import {Button, SafeAreaView, StatusBar, Text, useColorScheme, View,} from "react-native";
import {Colors} from "react-native/Libraries/NewAppScreen";
import {styles} from "./AppStyles";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {Models} from "../screens/Models";
import {Screens} from "../constants/screens";
import {NativeStackScreenProps} from "react-native-screens/native-stack";
import {Login} from "../screens/Login";

const Stack = createNativeStackNavigator();

type HomeProps = NativeStackScreenProps<{}>

const Home: FC<HomeProps> = ({navigation}) => {
    const [count, setCount] = useState(0);
    const isDarkMode = useColorScheme() === "dark";

    return <View>
        <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"}/>
        <View style={{height: "100%"}}>
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
                onPress={() => navigation.navigate(Screens.MODELS)} //TODO ts shit
            />
            <Button
                title={"Login"}
                onPress={() => navigation.navigate(Screens.LOGIN)} //TODO ts shit
            />
        </View>
    </View>

}

const App: FC = memo(() => {
    const isDarkMode = useColorScheme() === "dark";


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    return (
        <SafeAreaView style={{height: "100%"}}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName={Screens.HOME}>
                    <Stack.Screen name={Screens.MODELS} component={Models}/>
                    <Stack.Screen name={Screens.LOGIN} component={Login}/>
                    <Stack.Screen options={{headerShown: false}} name={Screens.HOME} component={Home}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
});

export default App;
