import { SafeAreaView, StyleSheet, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Translation } from '../../../app/i18n/IntlProvider';
import Typography from '../../design-system/typography/Typography';
import { useTheme } from '../../design-system/theme/ThemeContext';
import { Theme } from '../../design-system/theme/stylesheet';
import Button from '../../design-system/button/Button';
import { SignInUpStackScreens } from '../../../app/navigation/SignInUpStackScreens.type';

const baseMargin = {
  marginLeft: 30,
  marginRight: 30,
};

const NotSignedUpScreenStyle = (theme: Theme) => StyleSheet.create({
  container: {
    backgroundColor: theme.components.background,
    flex: 1,
  },
  title: {
    margin: 30,
  },
  subTitle: {
    ...baseMargin,
  },
  titlesContainer: {
    flex: 3,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  button: {
    ...baseMargin,
  },
});

export default function NotSignedUpScreen() {
  const theme = useTheme();
  const { navigate } = useNavigation<NativeStackNavigationProp<SignInUpStackScreens>>();

  return (
    <SafeAreaView style={NotSignedUpScreenStyle(theme).container}>
      <View style={NotSignedUpScreenStyle(theme).titlesContainer}>
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
      </View>
      <View style={NotSignedUpScreenStyle(theme).buttonContainer}>
        <Button
          style={NotSignedUpScreenStyle(theme).button}
          onPress={() => navigate('Login')}
          title={<Translation id="profile.button.login.label" />}
        />
        <Button
          style={NotSignedUpScreenStyle(theme).button}
          variant="secondary"
          onPress={() => {
            console.log('clicked on sign up button');
          }}
          title={<Translation id="profile.button.signup.label" />}
        />
      </View>
    </SafeAreaView>
  );
}
