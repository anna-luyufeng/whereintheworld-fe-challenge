import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

import styles from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>404</h2>
      <h3>The page you were looking for doesn't exist.</h3>
      <p className={styles.helptext}>
        You either tried some shady route or you came here by mistake. <br />
        Whichever it is, try using the navigation.
      </p>

      <Button component={Link} to="/" variant="contained">
        Back to home
      </Button>
    </div>
  );
}
