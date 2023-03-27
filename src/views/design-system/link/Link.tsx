import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import Typography from '../typography/Typography';
import { useTheme } from '../theme/ThemeContext';
import { Theme } from '../theme/stylesheet';

const LinkStyle = (theme : Theme) => StyleSheet.create({
  typo: {
    color: theme.palette.bittersweet,
    textDecorationLine: 'underline',
  },
});

type LinkType = {
  onPress: () => void
  label: ReactNode
  style?: StyleProp<TextStyle>
};

export default function Link({ onPress, label, style = {} } : LinkType) {
  const theme = useTheme();
  return (
    <Typography
      onPress={onPress}
      type="h2"
      style={[LinkStyle(theme).typo, style]}
      disabled={false}
    >
      {label}
    </Typography>
  );
}
