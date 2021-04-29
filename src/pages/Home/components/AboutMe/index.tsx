import Paper from "components/Paper";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import moment from "moment";

type BioLabelProps = {
  icon: string;
  label: string;
};
const BioLabel = ({ icon, label }: BioLabelProps) => {
  return (
    <Grid container direction="row" alignItems="center">
      <Grid item>
        <Icon style={{ marginRight: "10px" }}>{icon}</Icon>
      </Grid>
      <Grid item>
        <Typography>
          <strong>{label}</strong>
        </Typography>
      </Grid>
    </Grid>
  );
};

const AboutMe = () => {
  return (
    <Paper>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h5" paragraph>
            About Me
          </Typography>
          <Typography>
            Hello! I’m Kampee Tonoi. I am passionate about Web Developement. I
            am a skilled <strong>back-end</strong> and
            <strong> front-end</strong> developer. I am a quick learner and a
            team worker that gets the job done. Between both I am like to coding
            back-end first then front-end. 😁
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h5" paragraph>
            Bio
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={3}>
              <BioLabel icon="cake" label="Age" />
            </Grid>
            <Grid item xs={9}>
              <Typography>{moment().diff("1995-05-12", "years")}</Typography>
            </Grid>
            <Grid item xs={3}>
              <BioLabel icon="email" label="Email" />
            </Grid>
            <Grid item xs={9}>
              <Typography>kampee.expertly01@gmail.com</Typography>
            </Grid>
            <Grid item xs={3}>
              <BioLabel icon="phone" label="Phone" />
            </Grid>
            <Grid item xs={9}>
              <Typography>096 780 9540</Typography>
            </Grid>
            <Grid item xs={3}>
              <BioLabel icon="home" label="Address" />
            </Grid>
            <Grid item xs={9}>
              <Typography>
                104/14 m.2, Tonpao, Sankampang, Chiang Mai, 51030
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;
