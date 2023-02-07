import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import IntlProvider from './i18n/IntlProvider';
import { ThemeProvider } from '../views/design-system/theme/ThemeContext';
import SignInUpStack from './navigation/SignInUpStack';

function App() {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <IntlProvider>
          <SignInUpStack />
        </IntlProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
