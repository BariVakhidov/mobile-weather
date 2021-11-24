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
    borderColor: "#87b4ff",
    borderWidth: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  model: {
    margin: 10,
    padding: 30,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2
  },
  image: {
    width: 250,
    height: 200,
  },
});
