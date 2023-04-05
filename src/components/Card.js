import React from 'react'
import swimmer from '../images/swimmer.png'
import star from '../images/star.png'
import '../css/Card.css'

const Card = (props) => {
    console.log(props)
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay 
    if (hours < 12){
        timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17){
        timeOfDay = "evening"
    }
    else{
        timeOfDay = "night"
    }
  return (
    <div className='CardRoot'>
        <img src={props.image} className='SwimmerImage' alt="" />
        <div className='ratings'>
            <img src={star} className="StarImage" alt="" />
            <span>{props.rating}</span>
            <span className='gray'>(6)* </span>
            <span className='gray'>  {props.country}</span>
        </div>
        <p className='bold'>{props.description} {props.name}</p>
        <p><span className='Amount'>From {props.price}</span> / person</p>
        <p>It is {timeOfDay}</p>
    </div>
  )
}

export default Card