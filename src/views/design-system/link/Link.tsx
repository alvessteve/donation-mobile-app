import React from 'react';
import { StyleSheet } from 'react-native';
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
  label: string
};

export default function Link({ label, onPress } : LinkType) {
  const theme = useTheme();
  return (
    <Typography
      onPress={onPress}
      type="h2"
      style={LinkStyle(theme).typo}
    >
      {label}
    </Typography>
  );
}
