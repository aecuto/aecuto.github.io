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
        backgroundColor: "#3f51b5",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
      }}
      style={{ marginBottom: "20px" }}
    />
  );
};

export default function Education() {
  return (
    <Paper>
      <Typography variant="h5" paragraph>
        Education
      </Typography>
      <Timeline>
        <TimelineItem
          title="Threerakarn banhong, lamphun, Thailand"
          subtitle="Mathematics-Science program (CUMULATIVE GPA: 3.49)"
        />
        <TimelineItem
          title="Chiang Mai University, Chiang Mai, Thailand"
          subtitle="Bachelor of Science in Computer Science (Cumulative/Major GPA: 3.09/3.41)"
        />
      </Timeline>
    </Paper>
  );
}
