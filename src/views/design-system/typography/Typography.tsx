import React, { ReactNode } from 'react';
import {
  StyleProp, StyleSheet, Text, TextStyle,
} from 'react-native';
import { FontKeys, Theme } from '../theme/stylesheet';
import { useTheme } from '../theme/ThemeContext';

const TypographyStyle = (theme: Theme) => StyleSheet.create({
  default: {
    color: theme.components.defaultText,
  },
  h1: {
    color: theme.components.title,
    fontSize: theme.typography.fontSize.h1,
  },
  h2: {
    color: theme.components.subTitle,
    fontSize: theme.typography.fontSize.h2,
  },
  p: {
    fontSize: theme.typography.fontSize.p,
  },
});

type TypographyType = {
  children: ReactNode,
  type?: Extract<FontKeys, 'h1' | 'h2' | 'p'>,
  style?: StyleProp<TextStyle>
};

export default function Typography({ children, type = 'p', style = {} }: TypographyType) {
  const theme = useTheme();
  return (
    <Text style={[TypographyStyle(theme)[type!], style]}>
      {children}
    </Text>
  );
}
