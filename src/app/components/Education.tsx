import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

export function Education() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-3">
          <TimelineIcon color="blue" />
          <Typography variant="h4" className="leading-none">
            Chiang Mai University
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography>Chiang Mai, Thailand</Typography>
          <Typography variant="paragraph" className="font-thin opacity-80">
            Bachelor of Science in Computer Science (Cumulative/Major GPA:
            3.09/3.41)
          </Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-3">
          <TimelineIcon color="blue" />
          <Typography variant="h4" className="leading-none">
            Threerakarn Banhong
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography>Lamphun, Thailand</Typography>
          <Typography variant="paragraph" className="font-thin opacity-80">
            Mathematics-Science program (CUMULATIVE GPA: 3.49)
          </Typography>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  );
}
