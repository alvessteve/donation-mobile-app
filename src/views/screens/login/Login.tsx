import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from '../../design-system/input/Input';
import PasswordInput from '../../design-system/password/PasswordInput';
import { Translation } from '../../../app/i18n/IntlProvider';
import Link from '../../design-system/link/Link';
import Button from '../../design-system/button/Button';
import Typography from '../../design-system/typography/Typography';
import { useTheme } from '../../design-system/theme/ThemeContext';
import { Theme } from '../../design-system/theme/stylesheet';

const LoginScreenStyle = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.palette.white,
    flex: 1,
    padding: 30,
  },
  formContainer: { flex: 4 },
  space: { marginBottom: 30 },
  link: { marginBottom: 50 },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    borderTopColor: theme.palette.lightgray,
    borderTopWidth: 1,
  },
});

export default function LoginScreen() {
  const link = (label: ReactNode) => <Link label={label} onPress={() => { console.log('Link sign up clicked'); }} />;

  const theme = useTheme();
  return (
    <View style={LoginScreenStyle(theme).container}>
      <View style={LoginScreenStyle(theme).formContainer}>
        <Input containerStyle={LoginScreenStyle(theme).space} label={<Translation id="login.email.label" />} />
        <PasswordInput style={LoginScreenStyle(theme).space} />
        <Link style={LoginScreenStyle(theme).link} onPress={() => {}} label={<Translation id="login.link.password" />} />
        <Button variant="secondary" title="Log in" onPress={() => {}} />
      </View>
      <View style={LoginScreenStyle(theme).linkContainer}>
        <Typography type="h2"><Translation id="login.signup.text" values={{ link }} /></Typography>
      </View>
    </View>
  );
}
