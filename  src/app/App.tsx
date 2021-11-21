import React, {FC, memo, useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  useColorScheme,
  View,
  FlatList,
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {styles} from './AppStyles';
import {sketchfabClient} from '../client/SketchfabClient';
import {SketchfabClientTypes} from '../client/SketchfabClient/sketchfabClient-types';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: FC = memo(() => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [models, setModels] = useState<SketchfabClientTypes.Model[] | null>(
    null,
  );
  const isDarkMode = useColorScheme() === 'dark';

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
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  useEffect(() => {
    if (input.length) {
      getModels({q: input});
    } else {
      setModels(null);
    }
  }, [input]);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View>
          <Text style={styles.bigTextStyle}>People, who like Romachka:</Text>
          <Text style={styles.bigTextStyle}>{count}</Text>
          <View style={styles.space}>
            <Button
              title={'increment'}
              onPress={() => setCount(prevState => prevState + 1)}
            />
            <Button
              title={'decrement'}
              onPress={() => setCount(prevState => prevState - 1)}
            />
          </View>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={text => setInput(text)}
          />
          {models && (
            <View style={styles.container}>
              {models.map(model => (
                <Model
                  key={model.uid}
                  imageUrl={model.thumbnails.images[0].url}
                  name={model.name}
                />
              ))}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

interface ModelProps {
  imageUrl: string;
  name: string;
}

const Model: FC<ModelProps> = memo(({name, imageUrl}) => {
  return (
    <View style={styles.model}>
      <Image style={styles.image} source={{uri: imageUrl}} />
      <Text style={styles.item}>{name}</Text>
    </View>
  );
});

export default App;
