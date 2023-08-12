import React from "react";
import "./card.css";

const CardComponent = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <>
          <div className="card">
            <img src={item.src} alt="my image" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{item.title}</h2>
              <p className="card-description">{item.title}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default CardComponent;
