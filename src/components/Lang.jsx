import React, { useState } from 'react';
import styles from '../style'
import { eng, ger,cze } from '../static'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

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
    slidesToShow: getSlidesToShow(), // Show the appropriate number of slides based on screen width
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: handleSliderChange,
  };

  // Update the number of slides to show on window resize
  React.useEffect(() => {
    const handleResize = () => {
      sliderSettings.slidesToShow = getSlidesToShow();
      // Re-render the component to apply the updated slidesToShow value
      forceUpdate();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // A custom hook to force re-render the component
  const [, forceUpdate] = React.useReducer((x) => x + 1, 0);

  return (
    <>
    
    
    <div className={`${styles.heading1} mt-6`}>
        <h1>Languages</h1>
      </div>


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
  )
}

export default Lang
