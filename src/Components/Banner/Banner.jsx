import React, { useState } from 'react'
import axios from 'axios';
import "./Banner.css"; 
import { useEffect } from 'react';
import {API_key,imageUrl} from '../../Constence/Constants'

const Banner = () => {
    const [movie,setMovie] = useState()

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_key}&language=en-US`).then((response)=>{
            // console.log(response.data.results[0])
            setMovie(response.data.results[0])
        })
  
    }, [])

  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title: " "}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            

            </div>
            <h1 className='discription'>{movie ? movie.overview:""}</h1>

        </div>
        <div className="fade_bottom"></div>
      
    </div>
  )
}

export default Banner
