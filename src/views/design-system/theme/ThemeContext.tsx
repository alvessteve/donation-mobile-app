import React, { createContext, ReactNode, useContext } from 'react';
import { Theme, themeValues } from './stylesheet';

const ThemeContext = createContext<Theme>({} as Theme);

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider(
  { children }: { children: ReactNode },
) {
  return <ThemeContext.Provider value={themeValues}>{children}</ThemeContext.Provider>;
}
