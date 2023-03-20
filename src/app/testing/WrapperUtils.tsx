import React, { ReactElement } from 'react';
import { ThemeProvider } from '../../views/design-system/theme/ThemeContext';
import IntlProvider from '../i18n/IntlProvider';
import { Translations } from '../i18n/Translations';

// eslint-disable-next-line import/prefer-default-export
export const createWrapper = (translations?: Partial<Translations>) => function Wrapper({ children }: { children: ReactElement }) {
  return (
    <ThemeProvider>
      <IntlProvider overriddenTranslations={translations}>
        {children}
      </IntlProvider>
    </ThemeProvider>
  );
};
