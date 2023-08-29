import React from 'react';
import styles from '../style';
import Carousel from './Carousel';





function Work() {
  const carouselItems = [
    <div key={`item-${1}`} className={`${styles.carousel_xp} ${styles.flexItem}`}>
      <h1 className={`${styles.xpH1}`}>SW Tester</h1>
      <div className={styles.cardContent}>
        <p className={`${styles.paragraph_xp}`}>
          Testování interních aplikací společnosti, <br />
          testy API. Komunikace s vývojáři a správa testovacích scénářů.
          Práce s json, xml, SQL, SalesForce, Jira, Postman + interní aplikace
          <br />
        </p>
        <div className={`${styles.dateWrapper}`}>
          <div className={`${styles.date}`}>
            <b>[ 01.10.2021 – 0.1.09.2022 ]</b>
          </div>
        </div>
      </div>
    </div>,
    <div key={`item-${2}`} className={`${styles.carousel_xp} ${styles.flexItem}`}>
      <h1 className={`${styles.xpH1}`}>SW analytik a developer</h1>
      <div className={styles.cardContent}>
        <p className={`${styles.paragraph_xp}`}>
          Analýza a vývoj procesů v rámci interní aplikace společnosti. Úpravy stávajících procesů a API dle požadavků
          zadavatele.
          Práce v interních aplikacích Designer (správa tříd a verzí, deployment) a eUFO designer (UML framework pro
          tvorbu procesních map).
          <br />
        </p>
        <div className={`${styles.dateWrapper}`}>
          <div className={`${styles.date}`}>
            <b>[ 01.09.2022 – 31.12.2022 ]</b>
          </div>
        </div>
      </div>
    </div>,
    <div key={`item-${3}`} className={`${styles.carousel_xp} ${styles.flexItem}`}>
      <h1 className={`${styles.xpH1}`}>Integration Team</h1>
      <div className={styles.cardContent}>
        <p className={`${styles.paragraph_xp}`}>
          V integračním týmu řešení incidentů na základě vyhodnocování Kibana logů + správa číselníků
          <br />
        </p>
        <div className={`${styles.dateWrapper}`}>
          <div className={`${styles.date}`}>
            <b>[ 01.01.2023 – 30.04.2023 ]</b>
          </div>
        </div>
      </div>
    </div>,
    <div key={`item-${4}`} className={`${styles.carousel_xp} ${styles.flexItem}`}>
    <h1 className={`${styles.xpH1}`}>Ano Team</h1>
    <div className={styles.cardContent}>
      <p className={`${styles.paragraph_xp}`}>
        Testování interních aplikací společnosti, <br />
        testy SDF VSDVSVtesto vacích scénářů.
        Práce s json, xml, SQL, SalesForce, Jira, Postman + interní aplikace
        <br />
      </p>
      <div className={`${styles.dateWrapper}`}>
        <div className={`${styles.date}`}>
          <b>[ 01.10.2021 – 00000000 ]</b>
        </div>
      </div>
    </div>
  </div>
  ];

  



  return (
    <>
      <div id='work'>

      <div className={`${styles.heading1} mt-10 sm:mt-6 ml-1 sm:ml-0`}>
        <h1>Work experience</h1>
      </div>

      <div className={`${styles.heading2} mt-4 sm:mt-8 ml-2 sm:ml-0`}>
        <h1>Moneta Money Bank</h1>
      </div>

      {/* Center the carousel */}
      <div className="flex items-center justify-center">
        {/* Add padding and control width for the carousel */}
        <div className="w-11/12 px-4 sm:w-11/12 md:w-5/6">
        <Carousel carouselItems={carouselItems} />
        </div>
      </div>

      </div>
    </>
  );
}

export default Work;
