import React, {useState} from 'react';
import {
  TouchableHighlight,
  Text,
  TextInput,
  View,
  useWindowDimensions,
  SafeAreaView,
} from 'react-native';
import {copies} from '../../utils/variables';
import {
  handleUserMessage,
  checkIfEmpty,
  validateUserInput,
} from '../../utils/stringUtils';
import {styles} from './login.style';
import {colors} from '../../themes/colors';
import {logIn, logOut} from '../../state/reducers/authReducer';
import {useAppDispatch, useAppSelector} from '../../state/hooks';

export const Login = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(state => state.auth.username);
  const [userInput, setUserInput] = useState('');
  const [emptyField, setEmptyField] = useState(false);
  const {height} = useWindowDimensions();

  const isDisabled = () => {
    return userInput.length < 5 || validateUserInput(userInput);
  };

  return (
    <SafeAreaView style={styles.container}>
      {username ? (
        <>
          <Text
            accessible={true}
            accessibilityHint={copies.ACCESSIBILITY_HINT.USERNAME_VALIDATION}
            style={styles.username}>
            {handleUserMessage(username)}
          </Text>
          <TouchableHighlight
            accessible={true}
            accessibilityLabel={copies.LOGIN_SCREEN.LOG_OUT}
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
              accessible={true}
              accessibilityLabel={copies.LOGIN_SCREEN.DIFF_ACCOUNT}
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
            <Text
              accessible={true}
              accessibilityHint={copies.ACCESSIBILITY_HINT.USERNAME_LENGTH}
              style={styles.warningText}>
              {userInput !== '' &&
                userInput.length < 5 &&
                copies.LOGIN_SCREEN.WRONG_USER_INPUT.LENGTH}
              {emptyField && copies.LOGIN_SCREEN.WRONG_USER_INPUT.EMPTY_FIELD}
            </Text>
            <Text
              accessible={true}
              accessibilityHint={copies.ACCESSIBILITY_HINT.USERNAME_CHARTS_TYPE}
              style={styles.warningText}>
              {userInput !== '' &&
                validateUserInput(userInput) &&
                copies.LOGIN_SCREEN.WRONG_USER_INPUT.CHART_TYPE}
            </Text>
          </View>
          <TextInput
            autoFocus={true}
            accessible={true}
            accessibilityLabel="username input"
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
            accessible={true}
            accessibilityLabel={copies.LOGIN_SCREEN.SIGN_IN}
            activeOpacity={0.8}
            underlayColor={colors.blueBackground}
            onPress={() => dispatch(logIn(userInput))}
            accessibilityState={{disabled: isDisabled()}}
            disabled={isDisabled()}>
            <Text style={styles.buttonText}>{copies.LOGIN_SCREEN.SIGN_IN}</Text>
          </TouchableHighlight>
        </>
      )}
    </SafeAreaView>
  );
};
