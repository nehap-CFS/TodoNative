import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  notewrap: {
    height: 80,
    width: 300,
    backgroundColor: '#F1F0E8',
    borderWidth: 3,
    borderStyle: 'dotted',
    borderColor: 'black',
    margin: 'auto',
    marginTop: 20,
    borderRadius: 10,
    marginBottom: -20,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    marginLeft: 15,
  },
  content: {
    fontSize: 20,
    marginLeft: 15,
  },
  delbtn: {
    height: 50,
    width: 50,
    borderRadius: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -15,
    left: 280,
  },
  deltext: {
    color: 'white',
    fontWeight: '600',
  },
  noteshow: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: -20,
  },
  listContainer: {
    padding: 20,
    alignItems: 'center',
    width: 370,
    margin: 'auto',
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
});
