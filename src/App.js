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
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
   <>
   <div className='bs'>
    <Header/>
    <Carousell/>
    <Services/>
    <About/>
    <Desgin/>
    <Team/>
    <Blog/>
    <Gallery/>
    <Contact/>
    <Footer/>
    </div>
   </>
  );
}

export default App;
