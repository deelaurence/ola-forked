import Header from "./Header/Header";
import Projects from "./Projects/Projects";
import Info from "./Info/Info";
const Home = () => {
  return (
    <section className='projects-section'>
     <Header />
      <Info />
      {/* <Skills /> */}
      {/* <Shapes /> */}
      {/* <About /> */}
      <Projects />
    </section>
  );
};


export default Home;
