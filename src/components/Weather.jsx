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
      </div>
        <img src={cloudy_icon} alt="" className='weather-icon'/>
        <p className='temperature'>16c</p>
        <p className='location'>Londan</p>
        <div className='weather-data'>
          <div className='col'>
            <img src={humidity_icon} alt="" />
          </div>
        </div>
     
    </div>
  )
}

export default Weather
