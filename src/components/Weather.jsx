import React from 'react'
import './Weather.css'
import search_icon from '../assets/search.png';
import cloudy_icon from '../assets/cloudy.png'
import humidity_icon from '../assets/humidity(1).png';
import wind_icon from '../assets/wind.png'
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
            <div>
              <p>91%</p>
              <span>Humidity</span>
            </div>
            </div>
          <div className='col'>
            <img src={wind_icon} alt="" />
            <div>
              <p>3.6km/h</p>
              <span>Wind speed</span>
            </div>
          </div>
        </div>
     
    </div>
  )
}

export default Weather
