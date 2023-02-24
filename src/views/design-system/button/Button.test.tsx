import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import Button from './Button';
import { ThemeProvider } from '../theme/ThemeContext';

describe('Button', () => {
  it("calls the onPress callback when the button's pressed", () => {
    const onPress = jest.fn();
    render(<Button title="press me" onPress={onPress} />, { wrapper: ThemeProvider });

    fireEvent.press(screen.getByText('press me'));

    expect(onPress).toHaveBeenCalled();
  });
});
