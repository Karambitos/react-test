import React from 'react';
import CardHeader from "../CardHeader";
import CardContent from "../CardContent";

const Card = ({ slides, currentSlide }) => {
  return (
      <div className="">
        <CardHeader/>
        <CardContent/>
        <button>Start</button>
      </div>
  );
};

export default Card;