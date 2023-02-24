import React, { ReactNode } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { useTheme } from '../theme/ThemeContext';
import { Theme } from '../theme/stylesheet';
import Typography from '../typography/Typography';

const ButtonStyle = (theme: Theme, pressed: boolean = false) => StyleSheet.create({
  container: {
    backgroundColor: pressed ? theme.components.button.primary.background.pressed : theme.components.button.primary.background.initial,
    margin: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: theme.components.button.primary.label,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: theme.components.button.primary.label,
  },
});

export default function Button({ title, onPress }: { title: ReactNode, onPress: () => void }) {
  const theme = useTheme();
  return (
    <Pressable onPress={onPress} style={({ pressed }) => ButtonStyle(theme, pressed).container}>
      <Typography type="h2" style={ButtonStyle(theme).label}>
        {title}
      </Typography>
    </Pressable>
  );
}
