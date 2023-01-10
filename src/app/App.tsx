import React from 'react';
import { Text, View } from 'react-native';
import { Translation } from './i18n/IntlProvider';

function App() {
  return (
    <View>
      <Text><Translation id="profile.title" /></Text>
    </View>
  );
}

export default App;
