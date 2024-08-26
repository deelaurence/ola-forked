import About from './components/About/About';
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


import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};



function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/project/:name' element={<Details  />}/>
        </Routes>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
