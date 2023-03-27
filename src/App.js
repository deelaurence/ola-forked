import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Info from './components/Info/Info';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Shapes from './components/Shapes/Shapes';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Info />
      {/* <Skills /> */}
      {/* <Shapes /> */}
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
