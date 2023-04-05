import logo from './logo.svg';
import '../src/css/App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import PeopleData from './data/PeopleData'
import image from './images/swimmer.png'



function App() {

  const PeopleElements = PeopleData.map(function(person){
    return <Card 
    id={person.id}
    title={person.title}
    description={person.description}
    price={person.price}
    image={person.image}
    stats={person.stats}
    location={person.location}
    openSpots={person.openSpots}
    />
  })
  return (
    <div className="App">
      <img src="./public/images/swimmer.png" alt="" />
      <Navbar/>
      <Hero/>
      <div className='flex'>
      {PeopleElements}
      </div>
    </div>
  );
}

export default App;
