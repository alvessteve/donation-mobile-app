import React, { ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Theme } from '../theme/stylesheet';
import { useTheme } from '../theme/ThemeContext';

export const fontSize = {
  h1: 25,
};

const TypographyStyle = (theme: Theme) => StyleSheet.create({
  default: {
    color: theme.defaultText,
  },
  h1: {
    color: theme.title,
    fontSize: fontSize.h1,
  },
});

export default function Typography({ children, type }: { children: ReactNode, type?: 'h1' }) {
  const theme = useTheme();
  return (
    <Text style={TypographyStyle(theme)[type!]}>
      {children}
    </Text>
  );
}

Typography.defaultProps = {
  type: 'default',
};
