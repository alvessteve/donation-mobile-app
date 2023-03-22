import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react-native';
import { createWrapper } from '../../../app/testing/WrapperUtils';
import Link from './Link';

describe('Link', () => {
  it('shows the link', () => {
    render(
      <Link label="press" onPress={() => {}} />,
      { wrapper: createWrapper({ 'login.password.label': 'label' }) },
    );

    expect(screen.getByText('press')).toBeDefined();
  });
  it('should behave as expected when clicking on it', () => {
    const onPress = jest.fn();
    render(
      <Link label="press" onPress={onPress} />,
      { wrapper: createWrapper({ 'login.password.label': 'label' }) },
    );

    fireEvent.press(screen.getByText('press'));

    expect(onPress).toHaveBeenCalled();
  });
});
