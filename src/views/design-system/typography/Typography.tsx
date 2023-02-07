import React, { ReactNode } from 'react';
import {
  StyleProp, StyleSheet, Text, TextStyle,
} from 'react-native';
import { Theme } from '../theme/stylesheet';
import { useTheme } from '../theme/ThemeContext';

export const fontSize = {
  h1: 25,
  h2: 16,
};

const TypographyStyle = (theme: Theme) => StyleSheet.create({
  default: {
    color: theme.defaultText,
  },
  h1: {
    color: theme.title,
    fontSize: fontSize.h1,
  },
  h2: {
    color: theme.subTitle,
    fontSize: fontSize.h2,
  },
});

type TypographyType = { children: ReactNode, type?: 'h1' | 'h2', style?: StyleProp<TextStyle> };

export default function Typography({ children, type, style }: TypographyType) {
  const theme = useTheme();
  return (
    <Text style={[TypographyStyle(theme)[type!], style]}>
      {children}
    </Text>
  );
}

Typography.defaultProps = {
  type: 'default',
  style: {},
};
