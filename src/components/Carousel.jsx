import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carousel({ carouselItems }) {
  const getSlidesToShow = () => {
    // Get the current window width
    const windowWidth = window.innerWidth;

    // Determine the number of slides to show based on the window width
    if (windowWidth >= 1200) {
      return 3;
    } else if (windowWidth >= 768) {
      return 2;
    } else {
      return 1;
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
    <Slider {...sliderSettings}>
      {carouselItems.map((item, index) => (
        <div key={`item-${index}`} className="px-4">
          {item}
        </div>
      ))}
    </Slider>
  );
}

export default Carousel;