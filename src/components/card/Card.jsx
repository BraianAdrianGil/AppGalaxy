import React from 'react';
import "./Card.css";

const Card = ({data}) => {
  return (
    <section className="card">
        <p className='card__phrase'>{data.phrase}</p>
    </section>
  );
}

export default Card;