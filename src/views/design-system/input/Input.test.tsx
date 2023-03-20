import React from 'react';
import { render, screen } from '@testing-library/react-native';
import Input from './Input';
import { createWrapper } from '../../../app/testing/WrapperUtils';
import { Translation } from '../../../app/i18n/IntlProvider';

describe('Input', () => {
  it('shows the input', () => {
    render(
      <Input placeholder="Placeholder" label={<Translation id="login.password.label" />} />,
      { wrapper: createWrapper({ 'login.password.label': 'label' }) },
    );

    expect(screen.getByPlaceholderText('Placeholder')).toBeDefined();
  });
});
