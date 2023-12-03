import { createContext } from "react";
import { theme } from "./Theme";
type themeProviderProps={
    children:React.ReactNode
}
export const context = createContext(theme);
export const ThemeContextProvider = (props:themeProviderProps) => {
  return <context.Provider value={theme}>{props.children}</context.Provider>;
};
