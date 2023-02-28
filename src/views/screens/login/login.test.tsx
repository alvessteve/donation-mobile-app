import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from '../../design-system/theme/ThemeContext';
import IntlProvider from '../../../app/i18n/IntlProvider';
import LoginScreen from './Login';

describe('Login Page', () => {
  describe('Rendering', () => {
    it('should display the page', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <IntlProvider>
              <LoginScreen />
            </IntlProvider>
          </ThemeProvider>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
