import React, {FC, memo, useEffect, useState} from "react";
import {FlatList, TextInput, View, KeyboardAvoidingView} from "react-native";
import {Model} from "./Model";
import {styles} from "../../app/AppStyles";
import {getModels} from "../../redux/models/thunk";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {modelsActionCreators} from "../../redux/models/action-creators";
import {useIsFocused} from "@react-navigation/native";
import {Preloader} from "../../components/preloader";


export const Models: FC = memo(() => {
    const [input, setInput] = useState("");
    const {models, isFetching} = useAppSelector(state => state.models)
    const dispatch = useAppDispatch();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (input.length) {
            const timeout = setTimeout(() => dispatch(getModels({q: input})), 500);
            return () => {
                clearTimeout(timeout);
            }
        } else {
            dispatch(modelsActionCreators.setModels(null));
        }
    }, [input]);

    useEffect(() => {
        if (isFocused) {
            return () => {
                console.log("CLEANUP")
                dispatch(modelsActionCreators.setModels(null));
                setInput("");
            }
        }
    }, [isFocused])

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={text => setInput(text)}
            />
            <View style={styles.container}>
                {isFetching && <Preloader/>}
                {models && <FlatList
                    style={styles.models}
                    data={models}
                    renderItem={({item}) => (
                        <Model
                            key={item.uid}
                            imageUrl={item.thumbnails.images[0].url}
                            name={item.name}
                        />
                    )}
                />}
            </View>
        </KeyboardAvoidingView>
    );
});
