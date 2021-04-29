import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import Paper from "components/Paper";

type TimlineDataProps = {
  content: string;
  title: string;
};
const TimlineData = ({ title, content }: TimlineDataProps) => {
  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography color="textSecondary">{content}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{title}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function Education() {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        Education
      </Typography>
      <Timeline align="right">
        <TimlineData
          title="Threerakarn banhong, lamphun, Thailand"
          content="Mathematics-Science program (CUMULATIVE GPA: 3.49)"
        />
        <TimlineData
          title="Chiang Mai University, Chiang Mai, Thailand"
          content="Bachelor of Science in Computer Science (Cumulative/Major GPA: 3.09/3.41)"
        />
      </Timeline>
    </Paper>
  );
}
