import React from 'react';
import renderer from 'react-test-renderer';
import NotSignedUpScreen from './NotSignedUp';
import { ThemeProvider } from '../../design-system/theme/ThemeContext';
import IntlProvider from '../../../app/i18n/IntlProvider';

describe('NotSignedUp Page', () => {
  describe('Rendering', () => {
    it('should display the page', () => {
      const tree = renderer
        .create(
          <ThemeProvider>
            <IntlProvider>
              <NotSignedUpScreen />
            </IntlProvider>
          </ThemeProvider>,
        )
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});
