import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Input from './Input';

describe('Input', () => {
  it('shows the input', () => {
    render(<Input placeholder="Placeholder" />);

    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined();
  });
});
