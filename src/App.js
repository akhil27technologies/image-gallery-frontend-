import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Header from './components/Herosection/Header';
import Hero from './pages/Hero';
import Gallery from './components/Gallerysection/Gallery';
import Footer from './pages/Footer';



function App() {
  return ( 
   <>
      <Header/>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/gallery" element={<Gallery/>} />
      </Routes>
      <Footer/>
   </>
  );
}

export default App;