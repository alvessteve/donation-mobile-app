import React from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import Typography from '../typography/Typography';
import { useTheme } from '../theme/ThemeContext';
import { Theme } from '../theme/stylesheet';

const InputStyle = (theme: Theme) => StyleSheet.create({
  label: {
    color: theme.palette.lightgray,
  },
  input: {
    height: 40,
    width: '100%',
    borderBottomColor: theme.palette.lightgray,
    borderBottomWidth: 1,
  },
});

type InputType = {
  placeholder?: string
};

export default function Input({ placeholder = '' } : InputType) {
  const theme = useTheme();
  return (
    <View>
      <Typography style={InputStyle(theme).label}>Email</Typography>
      <RNTextInput
        style={InputStyle(theme).input}
        placeholder={placeholder}
      />
    </View>
  );
}
