export type TranslationsKeys = keyof typeof englishTranslations;
export type Translations = Record<TranslationsKeys, string>;

export const englishTranslations = {
  'profile.header': 'Givfolio',
  'profile.title': 'Help contribute to impactful organisations',
  'profile.subtitle':
        'Give to organizations and view all your favorited charities in one place.',
  'profile.button.login.label': 'Log in',
  'profile.button.signup.label': 'Sign up',
  'login.header': 'Log in',
  'login.email.label': 'Email',
  'login.password.label': 'Password',
  'login.link.password': 'Forgot password?',
  'login.signup.text': 'Don\'t have an account?',
  'login.signup.label': 'Sign up',
};
