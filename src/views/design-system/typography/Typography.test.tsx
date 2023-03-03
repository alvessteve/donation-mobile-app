import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { Text } from 'react-native';
import { ThemeProvider } from '../theme/ThemeContext';
import Typography from './Typography';

describe('Typography', () => {
  it('shows the typo with the correct label', () => {
    render(<Typography><Text>Text</Text></Typography>, { wrapper: ThemeProvider });

    expect(screen.getByText('Text')).toBeDefined();
  });
});
