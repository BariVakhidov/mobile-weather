import React, {FC, memo, useEffect, useState} from "react";
import {FlatList, TextInput, View, ActivityIndicator, KeyboardAvoidingView} from "react-native";
import {Model} from "./Model";
import {styles} from "../../app/AppStyles";
import {getModels} from "../../redux/models/thunk";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {modelsActionCreators} from "../../redux/models/action-creators";


export const Models: FC = memo(() => {
    const [input, setInput] = useState("");
    const {models, isFetching} = useAppSelector(state => state.models)
    const dispatch = useAppDispatch();

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
        return () => {
            dispatch(modelsActionCreators.setModels(null));
        }
    }, [])

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={text => setInput(text)}
            />
           <View style={styles.container}>
               {isFetching && <View style={styles.loader}><ActivityIndicator size="large" /></View>}
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
