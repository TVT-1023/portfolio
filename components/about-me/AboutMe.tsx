import React from 'react';
import Letter from './Letter';
import SectionHeading from '../SectionHeading';

export default function AboutMe() {
  return (
    <div id="about" className="mx-auto max-w-[1000px] px-4">
      <SectionHeading
        heading="Who is Caldwell?"
        subheading="8+ Years of Experience: Full-Stack Software engineer with a passion for UI/UX Design"
      />
      <Letter />
    </div>
  );
}
