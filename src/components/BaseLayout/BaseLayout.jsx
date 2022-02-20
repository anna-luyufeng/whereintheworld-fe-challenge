import { node } from "prop-types";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
// import LightModeIcon from "@mui/icons-material/LightMode";

import styles from "./BaseLayout.module.scss";

export default function BaseLayout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to="/">
            <h1 className={styles.title}>Where in the world?</h1>
          </Link>
          <DarkModeIcon />
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>{children}</div>
      </main>
    </>
  );
}

BaseLayout.propTypes = {
  children: node.isRequired,
};
