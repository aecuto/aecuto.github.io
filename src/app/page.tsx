"use client";

import "./globals.css";

import { Typography } from "@material-tailwind/react";
import { Skills } from "@/app/components/Skill";
import { WorkExperience } from "@/app/components/WorkExperience";
import { Education } from "@/app/components/Education";
import { About } from "@/app/components/About";
import { Social } from "@/app/components/Social";

export default function Home() {
  return (
    <>
      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <div className="hidden print:block">
            <Typography variant="h4" className="mb-3">
              print from:{" "}
              <span className="text-red-400">
                https://aecuto.github.io/resume/
              </span>
            </Typography>
          </div>

          <Typography variant="h1" className="italic mb-3">
            About
          </Typography>
          <About />
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="italic">
            Skills
          </Typography>
          <Skills />
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="italic mb-3">
            Work Experience
          </Typography>
          <WorkExperience />
        </div>
      </div>
      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="italic mb-3">
            Educations
          </Typography>
          <Education />
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <Social />
        </div>
      </div>
    </>
  );
}
