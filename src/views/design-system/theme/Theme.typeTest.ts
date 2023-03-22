/* eslint-disable @typescript-eslint/no-unused-vars */
import { ColorValueRgbType, Theme } from './stylesheet';
import { Equal, ExpectFalse } from '../../../app/testing/type-utils';

const wrongThemeValue = { aColor: 'rgb(61,139,190)' };

const wrongColorFormatOnTheme = { title: 'rgb(61,139,190)' };

const wrongHexaColor = 'FFF';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type Tests = [
  ExpectFalse<Equal<typeof wrongThemeValue, Theme>>,
  ExpectFalse<Equal<typeof wrongColorFormatOnTheme, Theme>>,
  ExpectFalse<Equal<typeof wrongHexaColor, ColorValueRgbType>>,
];
