import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import IntlProvider from './i18n/IntlProvider';
import NotSignedUpScreen from '../views/screens/sign/NotSignedUp';
import { ThemeProvider } from '../views/design-system/theme/ThemeContext';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <IntlProvider>
          <NotSignedUpScreen />
        </IntlProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
