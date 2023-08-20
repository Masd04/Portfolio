import React, { useState, useEffect  } from 'react';
import styles from '../style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

  const getSlidesToShow = () => {
    // Get the current window width
    const windowWidth = window.innerWidth;

    // Determine the number of slides to show based on the window width
    if (windowWidth >= 1200) {
      return 3; // Show 3 slides on screens wider than or equal to 1200px
    } else if (windowWidth >= 768) {
      return 2; // Show 2 slides on screens wider than or equal to 768px
    } else {
      return 1; // Show 1 slide on screens smaller than 768px
    }
  };
  

  const NextArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: 'absolute',
          top: '50%',
          right: '-1.5rem',
          transform: 'translateY(-50%)',
          zIndex: '1',
          backgroundColor: nextArrowClicked ? 'black' : 'rgb(250 204 21)',
        color: nextArrowClicked ? 'rgb(250 204 21)' : 'black',
          borderRadius: '50%',
          padding: '9px',
          fontSize: '30px',
          cursor: 'pointer',
        }}
        onClick={() => {
          setNextArrowClicked(true);
          onClick();
        }}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { style, onClick } = props;
    return (
      <div
        style={{
          ...style,
          position: 'absolute',
          top: '50%',
          left: '-1.5rem',
          transform: 'translateY(-50%)',
          zIndex: '1',
          backgroundColor: prevArrowClicked ? 'black' : 'rgb(250 204 21)',
        color: prevArrowClicked ? 'rgb(250 204 21)' : 'black',
          borderRadius: '50%',
          padding: '9px',
          fontSize: '30px',
          cursor: 'pointer',
        }}
        onClick={() => {
          setPrevArrowClicked(true);
          onClick();
        }}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow());
  
  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const [nextArrowClicked, setNextArrowClicked] = useState(false);
  const [prevArrowClicked, setPrevArrowClicked] = useState(false);

  const handleSliderChange = () => {
    setNextArrowClicked(false);
    setPrevArrowClicked(false);
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow, // Use the state variable for slidesToShow
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: handleSliderChange,
  };



  return (
    <>
    
      <div className={`${styles.heading1} mt-6 text-center`}>
        <h1>Work experience</h1>
      </div>

      <div className={`${styles.heading2} mt-8 text-center`}>
        <h1>Moneta Money Bank</h1>
      </div>

      {/* Center the carousel */}
      <div className="flex items-center justify-center">
        {/* Add padding and control width for the carousel */}
        <div className="w-11/12 px-4 sm:w-11/12 md:w-5/6">
          <Slider {...sliderSettings}>
            {carouselItems.map((item, index) => (
              // Apply margin and width to carousel items
              <div key={`item-${index}`} className="px-4">
                {item}
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Work;
