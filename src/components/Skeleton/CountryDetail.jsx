import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";

function CountryDetail() {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={6}>
        <Skeleton variant="rectangular" height={400} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </Grid>
    </Grid>
  );
}

export default CountryDetail;
