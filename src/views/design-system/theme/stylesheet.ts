/**
 * NB: we could restrict the ColorValueRgb type with the NumberRange type which restricts the boundary to 255 by a tail recursive type
 * however, I fell into a TS2590: Expression produces a union type that is too complex to represent
 type RgbUpperLimit = 255;
 type Mapped<N extends number, Result extends Array<number> = []> = (Result['length'] extends N ? Result : Mapped<N, [...Result, Result['length']]>);
 type NumberRange = Mapped<RgbUpperLimit>[number];
 */
export type ColorValueRgb = `rgb(${number},${number},${number})`;

enum ComponentsWithState {
  BUTTON = 'button',
}

type ComponentsWithoutVariantKeys = keyof typeof lightComponentColors;
type ComponentsWithoutVariantColors = Record<ComponentsWithoutVariantKeys, ColorValueRgb>;

export type ThemeVariant = 'primary' | 'secondary';
type ColorNames = 'curiousBlue' | 'nobel' | 'viking' | 'white' | 'black';
type States = 'pressed' | 'initial';
type ComponentsPartsKeys = 'background' | 'label';
type StatesColor = Record<States, ColorValueRgb>;
type ComponentsParts = Record<ComponentsPartsKeys, StatesColor | ColorValueRgb>;
export type ComponentsWithVariantColorPalette = Record<ThemeVariant, ComponentsParts>;
type ThemeComponentsWithVariantType = Record<ComponentsWithState, ComponentsWithVariantColorPalette>;
type ColorPaletteType = Record<ColorNames, ColorValueRgb>;

enum SizeKey {
  EXTRA_SMALL = 'extraSmall',
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRA_LARGE = 'extraLarge',
}

export enum FontSizeKey {
  P = 'p',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  CAPTION = 'caption',
}

type Size = Record<SizeKey, number>;
type FontSize = Record<FontSizeKey, number>;

export type Theme = {
  components: {
    stated: ThemeComponentsWithVariantType,
    stale: ComponentsWithoutVariantColors
  },
  palette: ColorPaletteType,
  typography: {
    size: Size,
    fontSize: FontSize
  }
};

export const colorPalette: ColorPaletteType = {
  curiousBlue: 'rgb(61,139,190)',
  nobel: 'rgb(155,155,155)',
  viking: 'rgb(75,192,185)',
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
};

const lightThemeComponentsWithVariant: ThemeComponentsWithVariantType = {
  button: {
    primary: {
      background: {
        initial: colorPalette.white,
        pressed: colorPalette.viking,
      },
      label: colorPalette.viking,
    },
    secondary: {
      background: {
        initial: colorPalette.viking,
        pressed: colorPalette.white,
      },
      label: colorPalette.white,
    },
  },
};

const lightComponentColors = {
  title: colorPalette.curiousBlue,
  subTitle: colorPalette.nobel,
  background: colorPalette.white,
  defaultText: colorPalette.black,
};

export const size: Size = {
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 28,
  extraLarge: 41,
};

export const fontSize: FontSize = {
  p: 14,
  h1: 25,
  h2: 16,
  h3: 18,
  h4: 16,
  caption: 12,
};

const lightTheme: Theme = {
  components: {
    stated: lightThemeComponentsWithVariant,
    stale: lightComponentColors,
  },
  palette: colorPalette,
  typography: {
    size,
    fontSize,
  },
};

export const themeValues = { ...lightTheme };
