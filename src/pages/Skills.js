import React from 'react';

import Main from '../layouts/Main';

import Skills from '../components/Resume/Skills';
import { skills, categories } from '../data/resume/skills';

const Resume = () => (
  <Main
    title="Sommario"
    description="Giuseppe Maldarelli CV."
  >
    <article className="post" id="resume">
      <Skills skills={skills} categories={categories} />
    </article>
  </Main>
);

export default Resume;
