// pages/AgencyPage.js

import React from 'react';
import Title from '../components/Task/Title';
import Box from '../components/Task/Box';
import agencyStyles from './AgencyPage.module.css'; // Import CSS module for AgencyPage
import { TfiRulerAlt2 } from "react-icons/tfi"; // Import TfiRulerAlt2 icon
import { LiaServerSolid } from "react-icons/lia";
import { GiRoundTable } from "react-icons/gi";


const AgencyPage = () => {
  return (
    <div className={agencyStyles.container}>
      <Title className={agencyStyles.title}>Managed agency selection</Title>
      <p className={agencyStyles.subtitle}>Strengthen your onboarding process</p>
      <div className={agencyStyles.content}>
        <div className={agencyStyles['image-container']} />
        <div>
          <Box
            icon={<TfiRulerAlt2 size={40} />} // Pass the TfiRulerAlt2 icon as a React element
            upperText="Brief"
            text="Complete brief writing or simple guidance on what to include, we've got you covered."
            backgroundColor="#f9f9f9"
            className={agencyStyles.box}
          />
          <Box
            icon={<LiaServerSolid size={40} />} // Use FaSearch icon from react-icons
            upperText="Search"
            text="In-depth agency search covering; criteria matching, door knocking and due-dilligence vetting."
            backgroundColor="#f4f4f4"
            className={agencyStyles.box}
          />
          <Box
            icon={<GiRoundTable size={40} />} // Use FaBullhorn icon from react-icons
            upperText="Pitch"
            text="Comprehensive pitch management, including comms, diary management and pitch hosting."
            backgroundColor="#f1f1f1"
            className={agencyStyles.box}
          />
        </div>
      </div>
    </div>
  );
};

export default AgencyPage;
