import React, {useState} from 'react';
import {
  TouchableHighlight,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {copies} from '../../utils/variables';
import {
  handleUserMessage,
  checkIfEmpty,
  validateUserInput,
} from '../../utils/stringUtils';
import {styles} from './login.style';
import {colors} from '../../themes/colors';
import {useDispatch, useSelector} from 'react-redux';
import {logIn, logOut} from '../../state/reducers/authReducer';
import {RootState} from '../../types/types';

export const Login = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: RootState) => state.auth.username);
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      {username ? (
        <>
          <Text style={styles.username}>{handleUserMessage(username)}</Text>
          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={colors.blueBackground}
            onPress={() => dispatch(logOut())}>
            <Text style={styles.buttonText}>{copies.LOGIN_SCREEN.LOG_OUT}</Text>
          </TouchableHighlight>
          <View
            style={[
              styles.userInputContainer,
              {
                paddingBottom: height / 10,
              },
            ]}>
            <Text style={styles.userInput}>
              {handleUserMessage(username, true)}
            </Text>
            <TouchableHighlight
              activeOpacity={0.8}
              underlayColor={colors.blueBackground}
              onPress={() => dispatch(logOut())}>
              <Text style={styles.buttonText}>
                {copies.LOGIN_SCREEN.DIFF_ACCOUNT}
              </Text>
            </TouchableHighlight>
          </View>
        </>
      ) : (
        <>
          <View style={styles.warningContainer}>
            <Text style={styles.warningText}>
              {userInput !== '' &&
                userInput.length < 5 &&
                copies.LOGIN_SCREEN.WRONG_USER_INPUT.LENGTH}
              {emptyField && copies.LOGIN_SCREEN.WRONG_USER_INPUT.EMPTY_FIELD}
            </Text>
            <Text style={styles.warningText}>
              {userInput !== '' &&
                validateUserInput(userInput) &&
                copies.LOGIN_SCREEN.WRONG_USER_INPUT.CHART_TYPE}
            </Text>
          </View>
          <TextInput
            autoCorrect={false}
            keyboardType="default"
            style={styles.textInput}
            placeholderTextColor={colors.inactive}
            placeholder="username"
            onChangeText={input => {
              checkIfEmpty(input, setEmptyField);
              setUserInput(input);
            }}
          />

          <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={colors.blueBackground}
            onPress={() => dispatch(logIn(userInput))}
            disabled={userInput.length < 5 || validateUserInput(userInput)}>
            <Text style={styles.buttonText}>{copies.LOGIN_SCREEN.SIGN_IN}</Text>
          </TouchableHighlight>
        </>
      )}
    </SafeAreaView>
  );
};
