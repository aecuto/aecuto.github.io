import { Grid, Typography } from "@material-ui/core";
import Paper from "components/Paper";

const References = () => {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        References
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography>Jirapong Nanta CEO & Co-founder at Banana</Typography>
          <Typography>Email: jirapong@bananacoding.com</Typography>
          <Typography>Telephone: 081-993-5985</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default References;
