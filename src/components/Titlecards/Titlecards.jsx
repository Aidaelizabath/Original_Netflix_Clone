import React, { useEffect, useRef, useState } from 'react';
import './Titlecards.css';
import { Link } from 'react-router-dom';

const Titlecards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2Q2NzI4N2RlNDYwOWE0MzljNDRkODVhMDhjOTZiYiIsIm5iZiI6MTc1MDM5MzY3Ni4xMDcsInN1YiI6IjY4NTRlMzRjZGE0NjlmZmJkY2RjMzkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RT33SySSv3wxL9K4Yzlf4_lgdY5hwR8QWliAaehYCqc'
    }
  };

  const handleWheel = (event) => {
  event.preventDefault();
  if (cardsRef.current) {
    cardsRef.current.scrollLeft += event.deltaY;
  }
};


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : 'now_playing'}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));

    const current = cardsRef.current;
    current?.addEventListener('wheel', handleWheel);

    return () => current?.removeEventListener('wheel', handleWheel);
  }, [category]);

  return (
    <div className='titlecards'>
      <h2>{title ? title : 'Popular on Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData
          .filter(card => card.backdrop_path)
          .map(card => (
            <Link to={`/player/${card.id}`} className="card" key={card.id}>
              <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
              <p>{card.original_title}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Titlecards;
