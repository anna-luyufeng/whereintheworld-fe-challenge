import { useCallback, useEffect, useState } from "react";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import styles from "./BaseBackToTop.module.scss";

const VISIBLE_OFFSET = 300;

function BaseBackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollHandler = useCallback(() => {
    setIsVisible(window.pageYOffset > VISIBLE_OFFSET);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [scrollHandler]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className={styles.root}>
        <Fab
          color="primary"
          size="medium"
          aria-label="Back to top"
          onClick={scrollToTop}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </div>
    )
  );
}

export default BaseBackToTop;
