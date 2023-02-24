import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { Translation } from '../../../app/i18n/IntlProvider';
import Typography from '../../design-system/typography/Typography';
import { useTheme } from '../../design-system/theme/ThemeContext';
import { Theme } from '../../design-system/theme/stylesheet';

const NotSignedUpScreenStyle = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.components.background,
    flex: 1,
  },
  title: {
    margin: 30,
  },
  subTitle: {
    marginLeft: 30,
    marginRight: 30,
  },
});

export default function NotSignedUpScreen() {
  const theme = useTheme();
  return (
    <SafeAreaView style={NotSignedUpScreenStyle(theme).container}>
      <Typography type="h1" style={NotSignedUpScreenStyle(theme).title}>
        <Translation
          id="profile.title"
        />
      </Typography>
      <Typography type="h2" style={NotSignedUpScreenStyle(theme).subTitle}>
        <Translation
          id="profile.subtitle"
        />
      </Typography>
    </SafeAreaView>
  );
}
