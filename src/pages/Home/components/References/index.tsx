import { Grid, Typography } from "@material-ui/core";
import MuiPaper from "@material-ui/core/Paper";
import styled from "styled-components";
import Paper from "components/Paper";

const Person = styled(MuiPaper)`
  padding: 20px;
`;

type ReferenceProps = {
  title: string;
  email: string;
  phone: string;
};
const Reference = ({ title, email, phone }: ReferenceProps) => {
  return (
    <Grid item xs={12} md={4}>
      <Person elevation={3}>
        <Typography>
          <strong>{title}</strong>
        </Typography>
        <Typography color="textSecondary" noWrap>
          Email: {email}
        </Typography>
        <Typography color="textSecondary">Phone: {phone}</Typography>
      </Person>
    </Grid>
  );
};

const References = () => {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        References
      </Typography>
      <Grid container spacing={3}>
        <Reference
          title={`Jirapong Nanta CEO & Co-founder at Banana Coding`}
          email={`jirapong@bananacoding.com`}
          phone={`081-993-5985`}
        />
        <Reference
          title={`Titipong Pisitwuttinan Co-founder & CEO at SkillLane`}
          email={`info@SkillLane.com`}
          phone={`081-996-7150`}
        />
        <Reference
          title={`Jedsada Tiwongvorakul Development Manager at 20scoops`}
          email={`jedsada.t@20scoops.net`}
          phone={`096-280-9505`}
        />
      </Grid>
    </Paper>
  );
};

export default References;
