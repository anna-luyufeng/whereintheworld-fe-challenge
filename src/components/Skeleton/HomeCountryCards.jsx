import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

function HomeCountryCards() {
  return (
    <Grid container>
      {[...Array(4).keys()].map((item) => (
        <Grid item xs={3} key={item}>
          <Skeleton variant="rectangular" width={265} height={340} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HomeCountryCards;
