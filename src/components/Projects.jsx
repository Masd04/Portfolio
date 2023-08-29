import React from 'react'
import styles from '../style';
import { fbcsmichov, javahra, leguan } from '../static';
import Carousel from './Carousel';


function Projects() {
  const carouselItems = [
    <div key={`item-${1}`} className={`${styles.card_lang} ${styles.flexItem}`}>
          <h1 className={`${styles.proH1}`}>FBC Smíchov</h1>
          <div className={styles.cardContent}>
            
                <img src={fbcsmichov} alt="" className="w-64 mx-auto" />

            <div className={`${styles.dateWrapper}`}>
              <div className={`${styles.link_pr}`}>
              <a href="https://fbcsmichov.cz/" target="_blank">
                <b className="">[ see website ]</b>
                </a>
              </div>
            </div>
          </div>
        </div>,
    <div key={`item-${2}`} className={`${styles.card_lang} ${styles.flexItem}`}>
    <h1 className={`${styles.proH1}`}>Leguan Mladá Boleslav</h1>
    <div className={styles.cardContent}>
      
        <img src={leguan} alt="" className="w-80 mx-auto" />

      <div className={`${styles.dateWrapper}`}>
        <div className={`${styles.link_pr}`}>
          <a href="https://leguanmb.cz/" target="_blank">
          <b className="">[ see website ]</b>
          </a>
        </div>
      </div>
    </div>
  </div>,
    <div key={`item-${3}`} className={`${styles.card_lang} ${styles.flexItem}`}>
    <h1 className={`${styles.proH1}`}>Java text adventure game</h1>
    <div className={styles.cardContent}>
        <img src={javahra} alt="" className="w-48 sm:w-52 mx-auto" />
      <div className={`${styles.dateWrapper}`}>
        <div className={`${styles.link_pr}`}>
          <a href="https://github.com/Masd04/SidliskovySen" target="_blank">
          <b className="">[ see code ]</b>
          </a>
        </div>
      </div>
    </div>
  </div>
  ];


  return (
    <>
    
    <div id='projects'>

    <div className={`${styles.heading1} mt-14 ml-1 sm:ml-0`}>
        <h1>Projects</h1>
      </div>

      
    <div className="flex items-center justify-center">
    
    <div className="w-11/12 px-4 sm:w-11/12 md:w-5/6">
        <Carousel carouselItems={carouselItems} />
        </div>
    </div>

    </div>
  </>
  )
}

export default Projects
