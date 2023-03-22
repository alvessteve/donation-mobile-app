import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider } from '../theme/ThemeContext';
import Typography from './Typography';

describe('Typography', () => {
  it('shows the typo with the correct label', () => {
    render(<Typography onPress={() => {}}><Text>Text</Text></Typography>, { wrapper: ThemeProvider });

    expect(screen.getByText('Text')).toBeDefined();
  });
  it('should behave when clicked', () => {
    const onPress = jest.fn();
    render(<Typography onPress={() => {}}><Text>Text</Text></Typography>, { wrapper: ThemeProvider });

    fireEvent.press(screen.getByText('Text'));

    expect(onPress).toBeDefined();
  });
});
