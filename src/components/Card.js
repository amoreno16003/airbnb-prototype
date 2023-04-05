import React from 'react'
import swimmer from '../images/swimmer.png'
import star from '../images/star.png'
import '../css/Card.css'

const Card = (props) => {
    let badgeText 
        if(props.item.openSpots === 0){
            badgeText = 'SOLD OUT'
        } else if(props.item.location === 'Online'){
            badgeText = 'ONLINE'
        } 
        else{
            badgeText = 'NONE'
        }
    
  return (
    <div className='CardRoot'>
        {badgeText !== 'NONE' && <div className='card-badge'>{badgeText}</div>}
        <img src={`../images/${props.item.image}`} className='CoverImage' alt="" />
        <div className='ratings'>
            <div>
                <img src={star} className="StarImage" alt="" />
                <span>{props.item.stats.rating}</span>
            </div>
            <span className='gray'>({props.item.stats.reviewCount})* </span>
            <span className='gray'>{props.item.location}</span>
        </div>
        <p className='bold'>{props.item.title} {props.item.name}</p>
        <p><span className='bold'>From {props.item.price}$</span> / person</p>
        {/* <p>It is {timeOfDay}</p> */}
    </div>
  )
}

export default Card