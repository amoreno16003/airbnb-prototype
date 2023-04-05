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
    key={person.id}
    item={person}
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
