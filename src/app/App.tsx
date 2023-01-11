import React from 'react';
import IntlProvider from './i18n/IntlProvider';
import NotSignedUpScreen from '../views/screens/sign/NotSignedUp';

function App() {
  return (
    <IntlProvider>
      <NotSignedUpScreen />
    </IntlProvider>
  );
}

export default App;
