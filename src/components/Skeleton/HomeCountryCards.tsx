import Skeleton from "@mui/material/Skeleton";

import styles from "pages/Home/Home.module.scss";

function HomeCountryCards() {
  return (
    <div className={styles.cards}>
      {[...Array(8).keys()].map((item) => (
        <Skeleton key={item} variant="rectangular" width={265} height={340} />
      ))}
    </div>
  );
}

export default HomeCountryCards;
