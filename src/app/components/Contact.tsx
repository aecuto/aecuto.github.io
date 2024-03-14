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

export function Contact() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-5">
          <TimelineIcon color="green" />
          <Typography variant="h4" className="leading-none">
            Phone
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography>0967809540</Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-5">
          <TimelineIcon color="green" />
          <Typography variant="h4" className="leading-none">
            Email
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography>kampee.expertly01@gmail.com</Typography>
        </TimelineBody>
      </TimelineItem>
      <TimelineItem>
        <TimelineConnector />
        <TimelineHeader className="h-5">
          <TimelineIcon color="green" />
          <Typography variant="h4" className="leading-none">
            Age
          </Typography>
        </TimelineHeader>
        <TimelineBody className="pb-8">
          <Typography>{`${moment().diff(
            "1995-05-15",
            "years"
          )} years`}</Typography>
        </TimelineBody>
      </TimelineItem>
    </Timeline>
  );
}
