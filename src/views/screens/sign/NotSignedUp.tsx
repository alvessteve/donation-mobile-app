import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { Translation } from '../../../app/i18n/IntlProvider';

export default function NotSignedUpScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: 'orange', flex: 1 }}>
      <Text><Translation id="profile.title" /></Text>
    </SafeAreaView>
  );
}
