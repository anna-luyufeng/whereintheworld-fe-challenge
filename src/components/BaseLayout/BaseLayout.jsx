import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import IconButton from "@mui/material/IconButton";

import getDesignTokens from "muiTheme";
import styles from "./BaseLayout.module.scss";

export default function BaseLayout({ children }) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const theme = useMemo(
    () => createTheme(getDesignTokens(isDarkTheme)),
    [isDarkTheme]
  );

  useEffect(() => {
    const preferredTheme = localStorage.getItem("theme");

    const systemPreferredDarkTheme =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (preferredTheme) return setIsDarkTheme(preferredTheme === "dark");

    setIsDarkTheme(systemPreferredDarkTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkTheme ? "dark" : "light");

    if (isDarkTheme) {
      document.querySelector("html").classList.remove("theme-light");
      document.querySelector("html").classList.add("theme-dark");
    } else {
      document.querySelector("html").classList.add("theme-light");
      document.querySelector("html").classList.remove("theme-dark");
    }
  }, [isDarkTheme]);

  const toggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

  return (
    <ThemeProvider theme={theme}>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/">
            <h1 className={styles.title}>Where in the world?</h1>
          </Link>
          <IconButton onClick={toggleDarkTheme}>
            {isDarkTheme ? (
              <LightModeIcon sx={{ color: "white" }} />
            ) : (
              <DarkModeIcon sx={{ color: "var(--text)" }} />
            )}
          </IconButton>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </ThemeProvider>
  );
}
