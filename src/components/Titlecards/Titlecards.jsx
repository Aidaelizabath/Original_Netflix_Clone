import React,{useEffect, useRef, useState} from 'react'
import './Titlecards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';


const Titlecards = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
  const cardsRef= useRef();





const handleWheel=(event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft +=event.deltaY;
}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel',handleWheel);
},[])

  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>    
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{

          return <Link to={`/player/.${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
      </div>
  )
}

export default Titlecards