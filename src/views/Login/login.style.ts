import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  username: {
    color: '#fafa',
    position: 'absolute',
    top: '50%',
    fontSize: 50,
  },
  buttonText: {
    marginTop: 50,
    color: '#fafafa',
    borderColor: 'white',
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
  },
  userInputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  userInput: {
    color: '#fafafa',
    fontSize: 30,
  },
  warningText: {
    color: 'white',
  },
  textInput: {
    backgroundColor: 'white',
    position: 'absolute',
    top: '50%',
    width: '50%',
    padding: 10,
    borderRadius: 10,
  },
});
