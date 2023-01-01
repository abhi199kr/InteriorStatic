import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import { Carousel } from 'bootstrap';
import Carousell from './Component/Carousell';
import Services from './Component/Services';
import About from './Component/About';
import Desgin from './Component/Desgin';
import Team from './Component/Team';
import Blog from './Component/Blog';
import Gallery from './Component/Gallery';

function App() {
  return (
   <>
    <Header/>
    <Carousell/>
    <Services/>
    <About/>
    <Desgin/>
    <Team/>
    <Blog/>
    <Gallery/>
   </>
  );
}

export default App;
