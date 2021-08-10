import React from 'react';
import Startrating from './Startrating';

const MovieCard = ({card}) => {
  return (
    <div className="movie-card">
    <Startrating rate={card.rating}/>
      <img src={card.image} alt="" />
      <h1>{card.name}</h1>
      <p>{card.date}</p>
    </div>
  );
}

export default MovieCard;
