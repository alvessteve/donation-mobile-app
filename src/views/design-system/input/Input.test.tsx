import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Input from './Input';
import { ThemeProvider } from '../theme/ThemeContext';

describe('Input', () => {
  it('shows the input', () => {
    render(<Input placeholder="Placeholder" />, { wrapper: ThemeProvider });

    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined();
  });
});
