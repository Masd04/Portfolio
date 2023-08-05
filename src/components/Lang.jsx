import React from 'react'
import styles from '../style'
import { eng, ger,cze } from '../static'

function Lang() {
  return (
    <>
    
    <div className={`${styles.heading1} mt-6`}>
        <h1>Languages</h1>
      </div>


      <div className={`flex flex-col sm:flex-row flex-wrap w-[90%] sm:w-full mb-8 justify-center`}>

        <div className={`${styles.card_lang} ${styles.flexItem1}`}>
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
        </div>

        <div className={`${styles.card_lang} ${styles.flexItem1}`}>
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
        </div>

        <div className={`${styles.card_lang} ${styles.flexItem1}`}>
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

        </div>
    
    </>
  )
}

export default Lang
