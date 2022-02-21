import Skeleton from "@mui/material/Skeleton";

import styles from "pages/CountryDetail/CountryDetail.module.scss";

function CountryDetail() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Skeleton
          variant="rectangular"
          height={400}
          width="100%"
          style={{ maxWidth: 550 }}
        />
      </div>
      <div className={styles.content}>
        <Skeleton
          variant="text"
          width={125}
          height={32}
          style={{ marginBottom: 20 }}
        />
        <Skeleton
          variant="rectangular"
          height={145}
          style={{ marginBottom: 60 }}
        />
        <Skeleton variant="rectangular" height={36} />
      </div>
    </div>
  );
}

export default CountryDetail;
