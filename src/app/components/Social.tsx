import { IconButton } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faTwitter,
  faTwitch,
} from "@fortawesome/free-brands-svg-icons";

export const Social = () => {
  return (
    <div>
      <IconButton
        variant="text"
        onClick={() =>
          window.open("https://github.com/aecuto/resume", "_target")
        }
      >
        <FontAwesomeIcon icon={faGithub} size="xl" color="white" />
      </IconButton>
      <IconButton
        variant="text"
        onClick={() => window.open("https://www.twitch.tv/aecuto", "_target")}
      >
        <FontAwesomeIcon icon={faTwitch} size="xl" color="white" />
      </IconButton>
      <IconButton
        variant="text"
        onClick={() =>
          window.open("https://www.instagram.com/aecuto", "_target")
        }
      >
        <FontAwesomeIcon icon={faInstagram} size="xl" color="white" />
      </IconButton>
      <IconButton
        variant="text"
        onClick={() =>
          window.open("https://www.facebook.com/kampee.aecuto/", "_target")
        }
      >
        <FontAwesomeIcon icon={faFacebook} size="xl" color="white" />
      </IconButton>
      <IconButton
        variant="text"
        onClick={() => window.open("https://twitter.com/aecuto", "_target")}
      >
        <FontAwesomeIcon icon={faTwitter} size="xl" color="white" />
      </IconButton>
    </div>
  );
};
