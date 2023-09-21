import React, { useState } from 'react';
import styles from '../style';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Lang from '../components/Lang';


function Home() {
  return (
    <>
    

      <Work />

      <Projects />

      <Lang />

      <Contact />

      
    </>
  );
}

export default Home;