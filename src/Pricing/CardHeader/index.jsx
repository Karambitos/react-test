import React from 'react';

const CardHeader = ({name, description, price}) => {
  return (
      <div style={{border: '1px solid red', borderRadius: '5px'}}>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{price}</p>
      </div>
  );
};

export default CardHeader;