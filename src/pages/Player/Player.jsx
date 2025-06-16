import React, { useState } from 'react'
import './Player.css' 
import back_arrow from 'src/assets/cards/back-arrow-icon-png-25.jpg'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const{id} =useParams ();
  const navigate = useNavigate();
  const[apiData,setApiData]=useState({
    name:"",
    key:"",
    published_at:"",
    typeof:""
  })
  return (
    <div className='player'>
      <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}} />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' frameBorder='0'allowFullScreen>
      </iframe>
<div className="player-info">
  <p>{apiData.publised_at.slice(0,10)}</p>
  <p>{apiData.name}</p>
  <p>{apiData.type}</p>
</div>

    </div>
  )
}

export default Player