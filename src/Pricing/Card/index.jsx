import React from 'react';
import CardHeader from "../CardHeader";
import CardContent from "../CardContent";
import Button from "../Button";

const Card = ({ name, description, price, content}) => {
  return (
      <div style={{width: '25%'}}>
        <CardHeader
            name={name}
            description={description}
            price={price}
        />
        <CardContent content={content}/>
        <Button>Start</Button>
      </div>
  );
};

export default Card;