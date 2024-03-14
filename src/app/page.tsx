"use client";

import "./globals.css";

import { Typography } from "@material-tailwind/react";
import { Skills } from "@/app/components/Skill";
import { WorkExperience } from "@/app/components/WorkExperience";
import { Education } from "@/app/components/Education";
import { About } from "@/app/components/About";
import { Social } from "@/app/components/Social";
import { Contact } from "@/app/components/Contact";

export default function Home() {
  return (
    <>
      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <div className="hidden print:block">
            <Typography variant="h4" className="mb-3">
              resume:{" "}
              <span className="text-red-400">https://aecuto.github.io</span>
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
          <Typography variant="h1" className="italic mb-3">
            Work Experience
          </Typography>
          <WorkExperience />
        </div>
      </div>

      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h3" className="italic mb-3">
            LANGUAGES
          </Typography>
          <Typography className="text-blue-600">
            English (Not fluently but can communicate)
          </Typography>
          <Typography className="text-blue-200">Thai (Native)</Typography>
        </div>
      </div>

      <div className="break-after-page" />

      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="italic">
            Skills
          </Typography>
          <Skills />
        </div>
      </div>

      <div className="break-after-page" />

      <div className="mt-16">
        <div className="mx-auto max-w-3xl">
          <Typography variant="h1" className="italic mb-3">
            Contacts
          </Typography>
          <Contact />
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
          <Typography variant="h4" className="mb-3">
            hobby sites
          </Typography>
          <Typography className="text-red-400">
            https://doo-anime.vercel.app
          </Typography>
          <Typography className="text-red-400">
            https://aecuto.github.io/oxford-words
          </Typography>
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
