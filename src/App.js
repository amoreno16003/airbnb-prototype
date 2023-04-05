import logo from './logo.svg';
import '../src/css/App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import image from './images/swimmer.png'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <div className='flex'>
      <Card
      image={image}
      rating='5.0'
      country='USA'
      description='Learn Life Lessons with'
      name='Katie Zaferes'
      price='135$'
      />
      <Card
      image={image}
      rating='4.0'
      country='Canada'
      description='Learn how to win with'
      name='James Morrow'
      price='100$'
      />
      <Card
      image={image}
      rating='10.0'
      country='USA'
      description='Be a badass with'
      name='Leon S Kennedy'
      price='200$'
      />
      </div>
    </div>
  );
}

export default App;
