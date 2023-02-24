import React, { ReactNode } from 'react';
import {
  Pressable, StyleProp, StyleSheet, ViewStyle,
} from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Theme, Variant } from '../theme/stylesheet';
import Typography from '../typography/Typography';

const ButtonStyle = (theme: Theme, variant: Variant, pressed: boolean = false) => StyleSheet.create({
  container: {
    backgroundColor: pressed ? theme.components.button[variant].background.pressed : theme.components.button[variant].background.initial,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: pressed ? theme.components.button[variant].background.initial : theme.components.button[variant].label,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.components.button[variant].label,
  },
});

type ButtonProps = {
  title: ReactNode,
  onPress: () => void
  variant?: Variant,
  style?: StyleProp<ViewStyle>
};

export default function Button({
  title, onPress, variant, style,
}: ButtonProps) {
  const theme = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [ButtonStyle(theme, variant!, pressed).container, style]}
    >
      <Typography type="h2" style={ButtonStyle(theme, variant!).label}>
        {title}
      </Typography>
    </Pressable>
  );
}

Button.defaultProps = {
  variant: 'primary',
  style: {},
};
