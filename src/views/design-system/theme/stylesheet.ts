/**
 * NB: we could restrict the ColorValueRgb type with the NumberRange type which restricts the boundary to 255 by a tail recursive type
 * however, I fell into a TS2590: Expression produces a union type that is too complex to represent
 type RgbUpperLimit = 255;
 type Mapped<N extends number, Result extends Array<number> = []> = (Result['length'] extends N ? Result : Mapped<N, [...Result, Result['length']]>);
 type NumberRange = Mapped<RgbUpperLimit>[number];
 */
export type ColorValueRgbType = `rgb(${number},${number},${number})`;
type ColorNames = 'curiousBlue'
| 'nobel'
| 'viking'
| 'white'
| 'black'
| 'lightgray'
| 'mediumLightGray'
| 'bittersweet';
type ColorPaletteType = Record<ColorNames, ColorValueRgbType>;

type SizeKeys = 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge';
type SizeType = Record<SizeKeys, number>;

export type FontKeys = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'caption';
type FontType = Record<FontKeys, number>;

export type Variant = 'primary' | 'secondary';

type ComponentsTheme = typeof lightThemeComponents;

export type Theme = {
  components: ComponentsTheme,
  palette: ColorPaletteType,
  typography: {
    size: SizeType,
    fontSize: FontType
  }
};

export const colorPalette: ColorPaletteType = {
  curiousBlue: 'rgb(61,139,190)',
  nobel: 'rgb(155,155,155)',
  viking: 'rgb(75,192,185)',
  white: 'rgb(255,255,255)',
  black: 'rgb(0,0,0)',
  lightgray: 'rgb(211,211,211)',
  mediumLightGray: 'rgb(182,182,182)',
  bittersweet: 'rgb(250,102,94)',
};

// act as a source of truth for the type to not have to declare each elements
const lightThemeComponents = {
  title: colorPalette.curiousBlue,
  subTitle: colorPalette.nobel,
  background: colorPalette.white,
  defaultText: colorPalette.black,
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

export const size: SizeType = {
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 28,
  extraLarge: 41,
};

export const fontSize: FontType = {
  p: 14,
  h1: 25,
  h2: 16,
  h3: 18,
  h4: 16,
  caption: 12,
};

const lightTheme: Theme = {
  components: lightThemeComponents,
  palette: colorPalette,
  typography: {
    size,
    fontSize,
  },
};

export const themeValues = { ...lightTheme };
