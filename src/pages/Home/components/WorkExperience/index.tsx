import Typography from "@material-ui/core/Typography";
import Paper from "components/Paper";

import { Timeline, TimelineEvent } from "react-event-timeline";

type TimeLineItemProps = {
  title: string;
  subtitle: string;
};
const TimelineItem = ({ title, subtitle }: TimeLineItemProps) => {
  return (
    <TimelineEvent
      title={<Typography>{title}</Typography>}
      subtitle={<Typography>{subtitle}</Typography>}
      bubbleStyle={{
        borderColor: "transparent",
        backgroundColor: "#f50057",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      }}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default function WorkExperience() {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        Work Experience
      </Typography>
      <Timeline>
        <TimelineItem
          title="Internship Ruby on Rails"
          subtitle="at Banana Coding (June 2017 – July 2017)"
        />
        <TimelineItem
          title="Junior Ruby on Rails"
          subtitle="at SkillLane (October 8, 2018 - December 2018)"
        />
        <TimelineItem
          title="Middle NodeJS, ReactJS"
          subtitle="at 20 Scoops (January 2, 2019 - Present)"
        />
      </Timeline>
    </Paper>
  );
}
