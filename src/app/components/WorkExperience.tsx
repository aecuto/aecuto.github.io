import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

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

          <ul className="list-inside list-disc leading-relaxed">
            <li>
              Integrate with Microsoft Graph APIs to fetch outlook email data by
              using AI to Read PDFs then get important data and store in
              database
            </li>
            <li>
              Setup microservices with nestjs which are User Management Service
              and another Service, that communicate by Message Broker using
              NATs. Deployed with docker build through github action and push
              docker image to AWS which publish in-use ports, Finally using
              portainer to handle docker swarm
            </li>
            <li>
              Integrate stripe and adyen payments gateway to settle product in
              store page
            </li>
            <li>
              Concurent Testing before festival event (for multiple transaction)
            </li>
            <li>Live maintenance during festival event</li>
            <li>eCommerce and SEO with nextjs</li>
            <li>
              Developed APIs with higher security to protect sensitive data.
            </li>
            <li>
              Implemented Continuous integration /Continuous delivery (CI/CD)
            </li>
            <li>Improved the performance to reduce time execute function.</li>
            <li>
              Analyzed requirements and designed ER diagrams and Sequence
              diagrams
            </li>
          </ul>
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
