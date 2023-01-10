import React, {ReactElement} from 'react';
import IntlProvider from '../i18n/IntlProvider';
import {Translations} from '../i18n/Translations';

export const createWrapper = (translations?: Partial<Translations>) =>
  function Wrapper({children}: {children: ReactElement}) {
    return (
      <IntlProvider overriddenTranslations={translations}>
        {children}
      </IntlProvider>
    );
  };
