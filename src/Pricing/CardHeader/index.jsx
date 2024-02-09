import React from 'react';
import styles from './Slider.module.css';

const Card = ({ slides, currentSlide }) => {
  return (
    <div className={styles.slider} date-index={currentSlide}>
      {slides.map((slide, index) => (
        <div key={index} 
          className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`} 
          date-index={index} 
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <p>{slide.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Slider;