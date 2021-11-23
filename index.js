import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {AppWrapper} from './src/app/AppWrapper';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => AppWrapper);
