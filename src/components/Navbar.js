import React from 'react'
import airbnblogo from '../images/airbnblogo.png'
import '../css/Navbar.css'
const Navbar = () => {
  const nums = [1,2,3,4,5]
  const doubled = nums.map(function(num){
      return <p>{num ** 2}</p>
  })
 
  const names = ['james', 'Katie', 'leon', 'alex', 'azaria']
  const FirstLetterCapped = names.map(function(name){
      return <p>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
  })
  
  const pokemons = ['pikachu', 'charmander', 'bulbasaur', 'squirtle']
  const pokemonList = pokemons.map(function(pokemon){
      return <li>{pokemon}</li>
  })

  return (
    <div id='NavbarRoot'>
        <div className='NavbarImageContainer'>
            <img src={airbnblogo} alt="" id='AirbnbImage'/>
            {/* <h1>{pokemonList}</h1> */}
        </div>
    </div>
  )
}

export default Navbar