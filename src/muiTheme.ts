import { PaletteOptions, ThemeOptions } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    neutral: PaletteOptions["primary"];
  }
}

const lightTheme: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#111517",
  },
  neutral: {
    main: "#ffffff",
    contrastText: "#111517",
  },
};

const darkTheme: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#ffffff",
  },
  neutral: {
    main: "#2b3945",
    contrastText: "#ffffff",
  },
};

const getDesignTokens = (isDarkMode: boolean): ThemeOptions => ({
  palette: {
    ...(isDarkMode ? darkTheme : lightTheme),
  },
  typography: {
    fontFamily: '"Nunito Sans", system-ui, sans-serif',
  },
});

export default getDesignTokens;
