import React, { useState } from 'react';
import {
  StyleProp, StyleSheet, View, ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import Input from '../input/Input';
import { useTheme } from '../theme/ThemeContext';
import { Translation } from '../../../app/i18n/IntlProvider';
import { Theme } from '../theme/stylesheet';

const PasswordInputStyle = (theme: Theme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderBottomColor: theme.palette.lightgray,
    borderBottomWidth: 1,
  },
  inputContainer: {
    width: '90%',
  },
  input: {
    borderBottomWidth: 0,
  },
  icon: {
    width: '10%',
    alignSelf: 'center',
  },
});

type PasswordInputType = {
  placeholder? : string
  style?: StyleProp<ViewStyle>
};

export default function PasswordInput({ placeholder = '', style = {} } : PasswordInputType) {
  const [showPassword, setShowPassword] = useState<boolean>(true);

  const theme = useTheme();
  return (
    <View style={[PasswordInputStyle(theme).container, style]}>
      <Input
        placeholder={placeholder}
        containerStyle={PasswordInputStyle(theme).inputContainer}
        label={<Translation id="login.password.label" />}
        inputStyle={PasswordInputStyle(theme).input}
        secureTextEntry={showPassword}
      />
      <Icon
        accessibilityHint="showPasswordIcon"
        style={PasswordInputStyle(theme).icon}
        name={showPassword ? 'eye-with-line' : 'eye'}
        size={20}
        onPress={() => setShowPassword(!showPassword)}
        color={theme.palette.mediumLightGray}
      />
    </View>
  );
}
