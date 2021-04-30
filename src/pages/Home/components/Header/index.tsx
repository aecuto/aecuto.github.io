import MuiPaper from "@material-ui/core/Paper";
import styled from "styled-components";
import HeaderCover from "assets/header.jpeg";
import AvatarImg from "assets/avatar.jpeg";
import { Avatar, Typography, Grid } from "@material-ui/core";

const Paper = styled(MuiPaper)`
  && {
    background-image: url(${HeaderCover});
    height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;
  }
`;

const Header = () => {
  return (
    <Paper square>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <Avatar
            src={AvatarImg}
            style={{ width: "100px", height: "100px" }}
            variant="rounded"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            <strong>Kampee Tonoi</strong>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>Back-end and Front-end Developer</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
