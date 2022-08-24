import React, {useContext, useState} from 'react';
import {TouchableHighlight, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../state/Auth';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Login = () => {
  const {signIn, authState, signOut} = useContext(AuthContext);
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const {isLoggedIn, username} = authState;

  const checkIfEmpty = (input: string) => {
    if (input === '') {
      setEmptyField(true);
    } else {
      setEmptyField(false);
    }
  };

  const validateUserInput = (input: string) => {
    const acceptedValue = /^[a-z0-9]+$/i;
    return acceptedValue.test(input) == false;
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      {isLoggedIn ? (
        <>
          <Text
            style={{
              color: '#fafa',
              position: 'absolute',
              top: '50%',
              fontSize: 50,
            }}>
            Hello, {username}
          </Text>

          <TouchableHighlight onPress={() => signOut(!isLoggedIn)}>
            <Text
              style={{
                marginTop: 50,
                color: '#fafafa',
                borderColor: 'white',
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
              }}>
              Log out
            </Text>
          </TouchableHighlight>
          <View
            style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={{color: '#fafafa', fontSize: 30}}>
              Not {username}?
            </Text>
            <TouchableHighlight onPress={() => signOut(!isLoggedIn)}>
              <Text
                style={{
                  marginTop: 50,
                  color: '#fafafa',
                  borderColor: 'white',
                  borderWidth: 2,
                  padding: 10,
                  borderRadius: 10,
                }}>
                Sign with a different account.
              </Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <>
          <Text style={{color: 'white'}}>
            {userInput !== '' &&
              userInput.length < 5 &&
              'Username must be at least 5 characters long.'}
          </Text>
          <Text style={{color: 'white'}}>
            {userInput !== '' &&
              validateUserInput(userInput) &&
              'Alphanumeric characters only.'}
          </Text>
          <Text style={{color: 'white'}}>
            {emptyField && 'username is required'}
          </Text>

          <TextInput
            autoCorrect={false}
            keyboardType="default"
            style={{
              backgroundColor: 'white',
              position: 'absolute',
              top: '50%',
              width: '50%',
              padding: 10,
              borderRadius: 10,
            }}
            placeholder="username"
            onChangeText={input => {
              checkIfEmpty(input);
              setUserInput(input);
            }}
          />

          <TouchableHighlight
            onPress={() => signIn(userInput)}
            disabled={userInput.length < 5 || validateUserInput(userInput)}>
            <Text
              style={{
                marginTop: 50,
                color: '#fafafa',
                borderColor: 'white',
                borderWidth: 2,
                padding: 10,
                borderRadius: 10,
              }}>
              Sign in
            </Text>
          </TouchableHighlight>
        </>
      )}
    </SafeAreaView>
  );
};
