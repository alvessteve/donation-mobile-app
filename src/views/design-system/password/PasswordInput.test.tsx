import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import PasswordInput from './PasswordInput';
import { createWrapper } from '../../../app/testing/WrapperUtils';

describe('PasswordInput', () => {
  it('shows the input', () => {
    render(<PasswordInput placeholder="Placeholder" />, { wrapper: createWrapper() });

    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined();
  });
  it('should not show the password', () => {
    render(<PasswordInput placeholder="Placeholder" />, { wrapper: createWrapper() });

    expect(screen.getByPlaceholderText('Placeholder').props.secureTextEntry).toBeTruthy();
  });
  it('should not show the password', () => {
    render(<PasswordInput placeholder="Placeholder" />, { wrapper: createWrapper() });

    fireEvent.press(screen.getByAccessibilityHint('showPasswordIcon'));

    expect(screen.getByPlaceholderText('Placeholder').props.secureTextEntry).toBeFalsy();
  });
});
