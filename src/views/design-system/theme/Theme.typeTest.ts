/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ColorValueRgb, Theme, ThemeVariant, VariantColor,
} from './stylesheet';

// @ts-expect-error
const wrongThemeValue: Theme = { aColor: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongColorFormatOnTheme: Theme = { title: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongHexaColor: ColorValueRgb = 'FFF';

// @ts-expect-error
const wrongVariantTheme: ThemeVariant = 'rgb(61,139,190)';

// @ts-expect-error
const wrongThemeVariant: VariantColor = { tertiary: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongColorFormat: VariantColor = { primary: 'rgb(61,139,190)' };
