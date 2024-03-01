/* eslint-disable react/no-unescaped-entities */
import { Chip, Typography } from "@material-tailwind/react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserClock,
  faPaperPlane,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";

export const About = () => {
  return (
    <>
      <Typography variant="h3" className="font-thin mb-3">
        Hi, I'm A 👋
      </Typography>
      <Typography variant="lead" className="mb-3">
        I'm a full stack developer from thailand who write about JavaScript,
        TypeScript, NestJS and ReactJS😊 As I've grown as a developer, I've
        contributed to projects and worked with other developers to create
        working applications and have written code that are maintainable and
        easy to understand.
      </Typography>

      <div className="grid gap-2 md:grid-cols-3">
        <Chip
          value={`${moment().diff("1995-05-15", "years")} year old`}
          icon={<FontAwesomeIcon size="xl" icon={faUserClock} beat />}
          variant="outlined"
          size="lg"
          className="select-text lowercase"
          color="red"
        />
        <Chip
          value="0967809540"
          icon={<FontAwesomeIcon size="xl" icon={faMobileScreenButton} shake />}
          variant="outlined"
          size="lg"
          className="select-text lowercase"
          color="yellow"
        />
        <Chip
          value={<p>kampee.aecuto@gmail.com</p>}
          icon={<FontAwesomeIcon size="xl" icon={faPaperPlane} bounce />}
          variant="outlined"
          size="lg"
          className="select-text lowercase"
          color="green"
        />
      </div>
    </>
  );
};
