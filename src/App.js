import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import slide1 from './assets/images/image1.jpg'
import slide2 from './assets/images/image2.jpg'
import slide3 from './assets/images/image3.jpg'
import slide4 from './assets/images/image4.jpg'
import Pricing from "./Pricing";
import './App.css'

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const slides = [
    {
      image: slide1,
      caption: 'Slide 1 Text',
    },
    {
      image: slide2,
      caption: 'Slide 2 Text',
    },
    {
      image: slide3,
      caption: 'Slide 3 Text',
    },
    {
      image: slide4,
      caption: 'Slide 4 Text',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    console.log((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
        console.log("Auto-play interval triggered");
      }, 3000);
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [autoPlay, currentSlide]);
  

  return (
    <div>
      <Pricing/>
      <Slider slides={slides} currentSlide={currentSlide}/>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
      <button onClick={toggleAutoPlay}>
        {autoPlay ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default App;
