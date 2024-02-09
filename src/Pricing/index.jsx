import React, {useState} from "react";
import jsonData from './content.json'
import Card from "./Card";

const Pricing = () => {

  const [data, setData] = useState(jsonData.packages);

  return (
      <div style={{display: "flex",  gap: 20, padding: 20}}>
        {data.map((card, index) => (
            <Card
                key={index}
                name={card.name}
                description={card.description}
                price={card.price}
                content={card.content}
            />
        ))}
      </div>
    )
}

export default Pricing;


