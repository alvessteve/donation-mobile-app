import React from 'react';
import { View } from 'react-native';
import Input from '../../design-system/input/Input';
import PasswordInput from '../../design-system/password/PasswordInput';
import { Translation } from '../../../app/i18n/IntlProvider';

export default function LoginScreen() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 30 }}>
      <Input label={<Translation id="login.email.label" />} />
      <PasswordInput />
    </View>
  );
}
