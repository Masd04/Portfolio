import React from 'react';
import styles from '../style'
import { eng, ger,cze } from '../static'
import Carousel from './Carousel';

function Lang() {
  const carouselItems = [
    <div key={`item-${1}`} className={`${styles.card_lang} ${styles.flexItem}`}>
    <h1 className={`${styles.proH1}`}>English</h1>
    <div className={styles.cardContent}>
      
      <img src={eng} alt="" className="w-52 mx-auto" />

      <div className={`${styles.dateWrapper}`}>
        <div className={`${styles.date_lang}`}>
          <b>C1</b>
          <p>FCE certified</p>
        </div>
      </div>
    </div>
  </div>,
    <div key={`item-${2}`} className={`${styles.card_lang} ${styles.flexItem}`}>
    <h1 className={`${styles.proH1}`}>German</h1>
  <div className={styles.cardContent}>
    
      <img src={ger} alt="" className="w-52 mx-auto" />

  <div className={`${styles.dateWrapper}`}>
  <div className={`${styles.date_lang}`}>
      <b>B1</b>
      <p>high school lessons</p>
  </div>
  </div>
  </div>
  </div>,
    <div key={`item-${3}`} className={`${styles.card_lang} ${styles.flexItem}`}>
    <h1 className={`${styles.proH1}`}>Czech</h1>
  <div className={styles.cardContent}>
    
      <img src={cze} alt="" className="w-52 mx-auto" />

  <div className={`${styles.dateWrapper}`}>
  <div className={`${styles.date_lang}`}>
      <b></b>
      <p>native speaker</p>
  </div>
  </div>
  </div>
  </div>
  ];

  

  return (
    <>
    <div id='lang'>
    
    <div className={`${styles.heading1} mt-28 ml-1 sm:ml-0`}>
        <h1>Languages</h1>
      </div>


      <div className="flex items-center justify-center">
        {/* Add padding and control width for the carousel */}
        <div className="w-11/12 px-4 sm:w-11/12 md:w-5/6">
        <Carousel carouselItems={carouselItems} />
        </div>
      </div>
    
    </div>
    </>
  )
}

export default Lang
