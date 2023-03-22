import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { createWrapper } from '../../../app/testing/WrapperUtils';
import Link from './Link';

describe('Link', () => {
  it('shows the link', () => {
    render(
      <Link label="press" />,
      { wrapper: createWrapper({ 'login.password.label': 'label' }) },
    );

    expect(screen.getByText('press')).toBeDefined();
  });
});
