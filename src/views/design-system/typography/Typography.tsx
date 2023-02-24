import React, { ReactNode } from 'react';
import {
  StyleProp, StyleSheet, Text, TextStyle,
} from 'react-native';
import { Theme } from '../theme/stylesheet';
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
});

type TypographyType = {
  children: ReactNode,
  type?: 'h1' | 'h2',
  style?: StyleProp<TextStyle>
};

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
