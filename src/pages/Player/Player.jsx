import React, { useEffect, useState } from 'react';
import './Player.css';
import back_arrow from '../../assets/cards/back-arrow-icon-png-25.jpg';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2Q2NzI4N2RlNDYwOWE0MzljNDRkODVhMDhjOTZiYiIsIm5iZiI6MTc1MDM5MzY3Ni4xMDcsInN1YiI6IjY4NTRlMzRjZGE0NjlmZmJkY2RjMzkxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RT33SySSv3wxL9K4Yzlf4_lgdY5hwR8QWliAaehYCqc'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => {
        if (res.results && res.results.length > 0) {
          setApiData(res.results[0]);
        } else {
          setApiData({ name: "No Trailer Found", key: "", published_at: "", type: "N/A" });
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={back_arrow} alt="Go back" onClick={() => { navigate(-1) }} />
      {apiData.key ? (
        <iframe
          width='90%'
          height='90%'
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title='Trailer'
          frameBorder='0'
          allowFullScreen
        />
      ) : (
        <p className="no-trailer">Trailer not available for this movie.</p>
      )}
      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
