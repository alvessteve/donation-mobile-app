import React from 'react';
import {
  View, TextInput as RNTextInput, StyleSheet, StyleProp, ViewStyle,
} from 'react-native';
import Typography from '../typography/Typography';
import { useTheme } from '../theme/ThemeContext';
import { Theme } from '../theme/stylesheet';

const InputStyle = (theme: Theme) => StyleSheet.create({
  label: {
    color: theme.palette.lightgray,
  },
  input: {
    height: 30,
    width: '100%',
    borderBottomColor: theme.palette.lightgray,
    borderBottomWidth: 1,
  },
});

type InputType = {
  label: JSX.Element
  secureTextEntry?: boolean
  containerStyle?: StyleProp<ViewStyle>
  inputStyle?: StyleProp<ViewStyle>
  placeholder?: string
};

export default function Input({
  label, secureTextEntry = false, containerStyle = {}, inputStyle = {}, placeholder = '',
} : InputType) {
  const theme = useTheme();
  return (
    <View style={containerStyle}>
      <Typography style={InputStyle(theme).label}>{label}</Typography>
      <RNTextInput
        style={[InputStyle(theme).input, inputStyle]}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
