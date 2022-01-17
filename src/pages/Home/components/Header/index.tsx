import MuiPaper from "@material-ui/core/Paper";
import styled from "styled-components";
import HeaderCover from "assets/header.jpeg";
import AvatarImg from "assets/avatar.jpeg";
import { Avatar, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";

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

const IconGroup = styled.div`
  svg {
    margin-left: 10px;
    cursor: pointer;
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
        <Grid item xs={12}>
          <IconGroup>
            <FacebookIcon
              onClick={() =>
                window.open("https://www.facebook.com/kampee.aecuto/", "_blank")
              }
            />
            <InstagramIcon
              onClick={() =>
                window.open("https://www.instagram.com/aecuto", "_blank")
              }
            />
            <TwitterIcon
              onClick={() =>
                window.open("https://twitter.com/aecuto", "_blank")
              }
            />
            <GitHubIcon
              onClick={() =>
                window.open("https://github.com/aecuto/resume", "_blank")
              }
            />
          </IconGroup>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Header;
