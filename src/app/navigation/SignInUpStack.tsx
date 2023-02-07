import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NotSignedUpScreen from '../../views/screens/sign/NotSignedUp';
import { useIntl } from '../i18n/IntlProvider';

type SignInUpStackScreens = {
  NotSignedUp: undefined
};

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
    </SignInUpNativeStack.Navigator>
  );
}

export default SignInUpStack;
