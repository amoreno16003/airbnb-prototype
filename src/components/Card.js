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
        <img src={`../images/${props.image}`} className='CoverImage' alt="" />
        <div className='ratings'>
            <div>
                <img src={star} className="StarImage" alt="" />
                <span>{props.stats.rating}</span>
            </div>
            <span className='gray'>({props.stats.reviewCount})* </span>
            <span className='gray'>USA</span>
        </div>
        <p className='bold'>{props.title} {props.name}</p>
        <p><span className='bold'>From {props.price}$</span> / person</p>
        {/* <p>It is {timeOfDay}</p> */}
    </div>
  )
}

export default Card