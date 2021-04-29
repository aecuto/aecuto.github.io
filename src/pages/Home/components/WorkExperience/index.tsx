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
        <TimelineDot color="primary" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography>{title}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default function WorkExperience() {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        Work Experience
      </Typography>
      <Timeline align="right">
        <TimlineData
          title="Internship Ruby on Rails"
          content="at Banana Coding (June 2017 – July 2017)"
        />
        <TimlineData
          title="Junior Ruby on Rails"
          content="at SkillLane (October 8, 2018 - December 2018)"
        />
        <TimlineData
          title="Middle NodeJs, ReactJs"
          content="at 20 Scoops (January 2, 2019 - Present)"
        />
      </Timeline>
    </Paper>
  );
}
