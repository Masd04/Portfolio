import React, { useState } from 'react';
import styles from '../style';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Lang from '../components/Lang';

function Home() {
  return (
    <>
      <Work />

      <Projects />

      <Lang />
    </>
  );
}

export default Home;