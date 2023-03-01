import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotSignedUpScreen from '../../views/screens/sign/NotSignedUp';
import { useIntl } from '../i18n/IntlProvider';
import LoginScreen from '../../views/screens/login/Login';
import { SignInUpStackScreens } from './SignInUpStackScreens.type';

const SignInUpNativeStack = createNativeStackNavigator<SignInUpStackScreens>();

function SignInUpStack() {
  const { translation } = useIntl();
  return (
    <SignInUpNativeStack.Navigator>
      <SignInUpNativeStack.Screen
        name="NotSignedUp"
        component={NotSignedUpScreen}
        options={{ title: translation('profile.header') }}
      />
      <SignInUpNativeStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: translation('login.header') }}
      />
    </SignInUpNativeStack.Navigator>
  );
}

export default SignInUpStack;
