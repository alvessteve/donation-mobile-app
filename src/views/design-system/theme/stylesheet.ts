type ColorThemesNames = keyof typeof lightColorTheme;
type ColorThemesNamesWithVariant = keyof typeof lightColorThemeWithVariant;
type LightColorThemeVariantType = Record<ColorThemesNamesWithVariant, VariantColor>;
type LightColorThemeType = Record<ColorThemesNames, ColorValueRgb>;

export type ThemeVariant = 'primary' | 'secondary';
type ColorNames = 'curiousBlue' | 'nobel' | 'viking' | 'white';

/**
 * NB: we could restrict the ColorValueRgb type with the NumberRange type which restricts the boundary to 255 by a tail recursive type
 * however, I fell into a TS2590: Expression produces a union type that is too complex to represent
 type RgbUpperLimit = 255;
 type Mapped<N extends number, Result extends Array<number> = []> = (Result['length'] extends N ? Result : Mapped<N, [...Result, Result['length']]>);
 type NumberRange = Mapped<RgbUpperLimit>[number];
 */
export type ColorValueRgb = `rgb(${number},${number},${number})`;

export type VariantColor = Record<ThemeVariant, ColorValueRgb>;
export type Theme = LightColorThemeVariantType & LightColorThemeType;

export const colorPalette: Record<ColorNames, ColorValueRgb> = {
  curiousBlue: 'rgb(61,139,190)',
  nobel: 'rgb(155,155,155)',
  viking: 'rgb(75,192,185)',
  white: 'rgb(255,255,255)',
};

const lightColorThemeWithVariant = {
  buttonBackgroundColor: { primary: colorPalette.white, secondary: colorPalette.viking },
  buttonLabelColor: { primary: colorPalette.viking, secondary: colorPalette.white },
};

const lightColorTheme = {
  title: colorPalette.curiousBlue,
  subTitle: colorPalette.nobel,
};

export const themeValues = { ...lightColorTheme, ...lightColorThemeWithVariant } as Theme;

export const size = {
  extraSmall: 8,
  small: 12,
  medium: 16,
  large: 28,
  extraLarge: 41,
};

export const fontSize = {
  p: 14,
  h1: 32,
  h2: 28,
  h3: 18,
  h4: 16,
  caption: 12,
};
