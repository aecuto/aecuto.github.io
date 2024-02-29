"use client";

import { DeveloperProfile } from "@welovedevs/react-ultimate-resume";

import data from "./resumeData.json";

export default function Home() {
  return (
    <DeveloperProfile
      mode={"edit"}
      data={data}
      // onEdit={onEdit}
      // onCustomizationChanged={onCustomizationChanged}
      options={{
        // locale: 'fr',
        // side: 'back',
        // showContactInfos: false,
        // apiKeys: {
        //     giphy: process.env.REACT_APP_GIPHY
        // },
        endpoints: {
          devicons:
            "https://firebasestorage.googleapis.com/v0/b/jechercheundev.appspot.com/o/technologies%2Ftechnologies_list.json?alt=media&token=459028ba-d9bc-4480-a3c4-88633afab7e2",
        },
        // maxSkills: 6,
        // customization,
        // disableSortableExperience: false,
        // maxCardsPerRow: 3,
        // referenceData: {
        //     professions: ['Developpeur Front-End', 'Développeur Back-End']
        // }
      }}
    />
  );
}
