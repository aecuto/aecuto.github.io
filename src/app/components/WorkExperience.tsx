import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";
import moment from "moment";

export function WorkExperience() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-3">
          <TimelineIcon color="red" />
          <Typography variant="h4" className="leading-none">
            Early Senior Full-stack
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography variant="paragraph" className="font-thin opacity-80">
            at 20Scoops (January 2, 2019 - Present)
          </Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-3">
          <TimelineIcon color="red" />
          <Typography variant="h4" className="leading-none">
            Junior Ruby on Rails
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography variant="paragraph" className="font-thin opacity-80">
            at SkillLane (October 8, 2018 - December 2018)
          </Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-3">
          <TimelineIcon color="red" />
          <Typography variant="h4" className="leading-none">
            Internship Ruby on Rails
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography variant="paragraph" className="font-thin opacity-80">
            at Banana Coding (June 2017 - July 2017)
          </Typography>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  );
}
