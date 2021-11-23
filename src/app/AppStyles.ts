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
    position: 'relative',
    flex: 1,
  },
  models: {
    padding: 22,
  },
  input: {
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 10,
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
  loader: {
    zIndex: 2,
    position: "absolute",
    backgroundColor: 'rgba(241, 241, 241, 0.64)',
    top: 0,
    right: 0,
    width: '100%',
    height: '100%',
    alignItems: "center",
    justifyContent: "center",
  },
});
