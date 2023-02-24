/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ColorValueRgbType, ComponentsWithVariantColorPalette, Theme, ThemeVariant,
} from './stylesheet';

// @ts-expect-error
const wrongThemeValue: Theme = { aColor: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongColorFormatOnTheme: Theme = { title: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongHexaColor: ColorValueRgbType = 'FFF';

// @ts-expect-error
const wrongVariantTheme: ThemeVariant = 'rgb(61,139,190)';

// @ts-expect-error
const wrongThemeVariant: ComponentsWithVariantColorPalette = { tertiary: 'rgb(61,139,190)' };

// @ts-expect-error
const wrongColorFormat: ComponentsWithVariantColorPalette = { primary: 'rgb(61,139,190)' };
