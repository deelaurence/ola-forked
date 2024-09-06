import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Home from './components/Landing';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Shapes from './components/Shapes/Shapes';
import Skills from './components/Skills/Skills';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { Details } from './components/Projects/projectDetails';
import { About } from './components/About/About';
import { preloadImages } from './utils/preload';
import { useEffect,useState } from 'react';
import { useLocation } from 'react-router-dom';
import headerImg from './assets/y.webp';
import headerImg2 from './assets/h.webp';
import headerImg3 from './assets/mom2.webp';
import headerImg4 from './assets/z.webp';
import headerImg5 from './assets/oniconc.webp'
import headerImg6 from './assets/flo6.webp'
import headerImg7 from './assets/flo(5).webp'


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


console.log = () => {};
console.warn = () => {};
console.error = () => {};
console.info = () => {};
console.debug = () => {};

function App() {
  const [isDesktop,setIsDesktop]=useState(window.innerWidth>768);
  let images=[headerImg,headerImg2,headerImg3,headerImg4]
  if(isDesktop){
    images=[headerImg5,headerImg,headerImg7,headerImg4]
  }  
  useEffect(() => {
    preloadImages(images)
      .then(() => {
        console.log('All images preloaded');
      })
      .catch((err) => {
        console.error('Error preloading image:', err);
      });
  }, []);
  
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/project/:name' element={<Details  />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
