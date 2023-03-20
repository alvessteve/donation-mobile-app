import React from 'react';
import { render, screen } from '@testing-library/react-native';
import PasswordInput from './PasswordInput';
import { createWrapper } from '../../../app/testing/WrapperUtils';

describe('PasswordInput', () => {
  it('shows the input', () => {
    render(<PasswordInput placeholder="Placeholder" />, { wrapper: createWrapper() });

    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined();
  });
});
