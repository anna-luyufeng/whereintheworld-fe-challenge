const lightTheme = {
  mode: "light",
  primary: {
    main: "#111517",
  },
  neutral: {
    main: "#ffffff",
    contrastText: "#111517",
  },
};

const darkTheme = {
  mode: "dark",
  primary: {
    main: "#ffffff",
  },
  neutral: {
    main: "#2b3945",
    contrastText: "#ffffff",
  },
};

const getDesignTokens = (isDarkMode) => ({
  palette: {
    ...(isDarkMode ? darkTheme : lightTheme),
  },
  typography: {
    fontFamily: '"Nunito Sans", system-ui, sans-serif',
  },
});

export default getDesignTokens;
