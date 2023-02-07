import { SafeAreaView } from 'react-native';
import React from 'react';
import { Translation } from '../../../app/i18n/IntlProvider';
import Typography from '../../design-system/typography/Typography';
import { useTheme } from '../../design-system/theme/ThemeContext';

export default function NotSignedUpScreen() {
  const theme = useTheme();
  return (
    <SafeAreaView style={{
      backgroundColor: theme.background, flex: 1,
    }}
    >
      <Typography type="h1"><Translation id="profile.title" /></Typography>
      <Typography type="h2"><Translation id="profile.title" /></Typography>
    </SafeAreaView>
  );
}
