import React from 'react'
import styles from '../style';
import Carousel from "react-elastic-carousel";
import { fbcsmichov, javahra, leguan } from '../static';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];

function Projects() {
  return (
    <>
    

    <div className={`${styles.heading2} mt-14`}>
        <h1>Projects</h1>
      </div>

      
    <div className="flex items-center justify-center">
    
    <div className="w-[94%]">
      <Carousel breakPoints={breakPoints}>
      <div className={`${styles.carousel_pr} ${styles.flexItem}`}>
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
        </div>
        <div className={`${styles.carousel_pr} ${styles.flexItem}`}>
          <h1 className={`${styles.proH1}`}>Leguan Mladá Boleslav</h1>
          <div className={styles.cardContent}>
            
              <img src={leguan} alt="" className="w-100 mx-auto" />

            <div className={`${styles.dateWrapper}`}>
              <div className={`${styles.link_pr}`}>
                <a href="https://leguanmb.cz/" target="_blank">
                <b className="">[ see website ]</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.carousel_pr} ${styles.flexItem}`}>
          <h1 className={`${styles.proH1}`}>Java text adventure game</h1>
          <div className={styles.cardContent}>
              <img src={javahra} alt="" className="w-56 mx-auto" />
            <div className={`${styles.dateWrapper}`}>
              <div className={`${styles.link_pr}`}>
                <a href="https://github.com/Masd04/SidliskovySen" target="_blank">
                <b className="">[ see code ]</b>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </Carousel>
    </div>
    </div>
  </>
  )
}

export default Projects
