import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  bigTextStyle: {
    textAlign: 'center',
    margin: 32,
    fontSize: 40,
    fontWeight: 'bold',
  },
  space: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    padding: 22,
  },
  input: {
    height: 40,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderWidth: 1,
    margin: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  model: {
    margin: 10,
    padding: 30,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 200,
  },
});
