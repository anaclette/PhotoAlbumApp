import React, {useContext, useState} from 'react';
import {TouchableHighlight, Text, TextInput, View} from 'react-native';
import {AuthContext} from '../../state/Auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import {copies} from '../../utils/variables';
import {
  handleUserMessage,
  checkIfEmpty,
  validateUserInput,
} from '../../utils/stringUtils';

export const Login = () => {
  const {signIn, authState, signOut} = useContext(AuthContext);
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const {isLoggedIn, username} = authState;

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
            {handleUserMessage(username!)}
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
              {copies.LOGIN_SCREEN.LOG_OUT}
            </Text>
          </TouchableHighlight>
          <View
            style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
            <Text style={{color: '#fafafa', fontSize: 30}}>
              {handleUserMessage(username!, true)}
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
                {copies.LOGIN_SCREEN.DIFF_ACCOUNT}
              </Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <>
          <Text style={{color: 'white'}}>
            {userInput !== '' &&
              userInput.length < 5 &&
              copies.LOGIN_SCREEN.WRONG_USER_INPUT.LENGTH}
          </Text>
          <Text style={{color: 'white'}}>
            {userInput !== '' &&
              validateUserInput(userInput) &&
              copies.LOGIN_SCREEN.WRONG_USER_INPUT.CHART_TYPE}
          </Text>
          <Text style={{color: 'white'}}>
            {emptyField && copies.LOGIN_SCREEN.WRONG_USER_INPUT.EMPTY_FIELD}
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
              checkIfEmpty(input, setEmptyField);
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
              {copies.LOGIN_SCREEN.SIGN_IN}
            </Text>
          </TouchableHighlight>
        </>
      )}
    </SafeAreaView>
  );
};
