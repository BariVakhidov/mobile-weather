import React, {FC, memo, useEffect, useState} from "react";
import {FlatList, TextInput, View} from "react-native";
import {Model} from "./Model";
import {sketchfabClient} from "../../client/SketchfabClient";
import {styles} from "../../app/AppStyles";
import {SketchfabClientTypes} from "../../client/SketchfabClient/sketchfabClient-types";


export const Models: FC = memo(() => {
    const [input, setInput] = useState('');
    const [models, setModels] = useState<SketchfabClientTypes.Model[] | null>(
        null,
    );

    const getModels = async (
        params: Partial<SketchfabClientTypes.SearchModelsParams>,
    ) => {
        const response: SketchfabClientTypes.SearchModelsResponse =
            await sketchfabClient.getModels(params);
        response.results.forEach(i =>
            i.thumbnails.images.sort((a, b) => b.width - a.width),
        );
        setModels(response.results);
    };
    useEffect(() => {
        if (input.length) {
            getModels({q: input});
        } else {
            setModels(null);
        }
    }, [input]);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={input}
                onChangeText={text => setInput(text)}
            />
            <FlatList
                style={styles.container}
                data={models}
                renderItem={({item}) => (
                    <Model
                        key={item.uid}
                        imageUrl={item.thumbnails.images[0].url}
                        name={item.name}
                    />
                )}
            />
        </View>
    );
});
