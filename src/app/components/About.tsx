/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";

import Image from "next/image";

export const About = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <Typography variant="h3" className="font-thin mb-3">
          Hi, I'm A 👋
        </Typography>
        <Typography variant="lead" className="mb-3">
          I'm a full stack developer. I live at Chiang Mai who interesting in
          hybrid work and remote work. If company doesn't in my base I can
          hybrid with 1-2 days per month.
        </Typography>
      </div>
      <div className="m-auto">
        <Image src={"/image.jpg"} alt="profile" width={200} height={200} />
      </div>
    </div>
  );
};
