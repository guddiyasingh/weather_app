import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png';
import cloudy_icon from '../assets/cloudy.png'

const Weather = () => {
  return (
    <div className='weather'>
      <div className='search-bar'>
        <input type="text"  placeholder='search'/>
        <img src={search_icon} alt="" />
        <img src={cloudy_icon} alt="" />
      </div>
     
    </div>
  )
}

export default Weather
