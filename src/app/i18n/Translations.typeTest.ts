import { Equal, ExpectFalse, ExpectTrue } from '../../../__tests__/type-utils';
import { Translations } from './Translations';

const translations = {
  'profile.header': 'Givfolio',
};

const wrongTranslation = {
  'fake.it': 'Fake',
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Tests = [
  ExpectTrue<Equal<typeof translations, Pick<Translations, 'profile.header'>>>,
  ExpectFalse<Equal<typeof translations, Translations>>,
  ExpectFalse<Equal<typeof wrongTranslation, Translations>>,
];
