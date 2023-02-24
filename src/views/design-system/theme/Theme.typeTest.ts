/* eslint-disable @typescript-eslint/no-unused-vars */
import { ColorValueRgbType, Theme } from './stylesheet';

// @ts-expect-error
const wrongThemeValue: Theme = { aColor: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongColorFormatOnTheme: Theme = { title: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongHexaColor: ColorValueRgbType = 'FFF';
