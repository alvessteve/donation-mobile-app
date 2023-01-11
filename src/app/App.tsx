import React from 'react';
import IntlProvider from './i18n/IntlProvider';
import NotSignedUpScreen from '../views/screens/sign/NotSignedUp';
import { ThemeProvider } from '../views/design-system/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <IntlProvider>
        <NotSignedUpScreen />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
