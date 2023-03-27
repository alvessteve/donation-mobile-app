import React, { ReactNode } from 'react';
import { View } from 'react-native';
import Input from '../../design-system/input/Input';
import PasswordInput from '../../design-system/password/PasswordInput';
import { Translation } from '../../../app/i18n/IntlProvider';
import Link from '../../design-system/link/Link';
import Button from '../../design-system/button/Button';
import Typography from '../../design-system/typography/Typography';
import { useTheme } from '../../design-system/theme/ThemeContext';

export default function LoginScreen() {
  const link = (label: ReactNode) => <Link label={label} onPress={() => { console.log('Link sign up clicked'); }} />;

  const theme = useTheme();
  return (
    <View style={{ backgroundColor: theme.palette.white, flex: 1, padding: 30 }}>
      <View style={{ flex: 4 }}>
        <Input label={<Translation id="login.email.label" />} />
        <PasswordInput />
        <Link onPress={() => {}} label={<Translation id="login.link.password" />} />
        <Button variant="secondary" title="Log in" onPress={() => {}} />
      </View>
      <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderTopColor: theme.palette.lightgray,
        borderTopWidth: 1,
      }}
      >
        <Typography type="h2"><Translation id="login.signup.text" values={{ link }} /></Typography>
      </View>
    </View>
  );
}
