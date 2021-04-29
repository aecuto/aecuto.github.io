import { Grid, Typography } from "@material-ui/core";
import Paper from "components/Paper";
import LevelSkill from "../../../../components/LevelSkill/index";

const ProfessionalSkills = () => {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        Professional Skills
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <LevelSkill name="NodeJs" level={3} />
          <LevelSkill name="NestJs" level={2} />
          <LevelSkill name="ReactJs" level={3} />
          <LevelSkill name="Docker" level={2} />
        </Grid>
        <Grid item xs={6}>
          <LevelSkill name="MongoDB" level={2} color="secondary" />
          <LevelSkill name="PostgreSQL,MySQL" level={2} color="secondary" />
          <LevelSkill name="HTML,CSS,JavaScript" level={1} color="secondary" />
          <LevelSkill name="Heroku, Firebase" level={1} color="secondary" />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProfessionalSkills;
