import React, { useEffect, useState } from 'react';
import headerImg from '../../assets/myreel.gif';
import headerImg2 from '../../assets/projects.gif';
import headerImg3 from '../../assets/slide2.webp';
import headerImg4 from '../../assets/slide3.webp';

const Header = () => {
  const images = [headerImg2, headerImg2, headerImg2, headerImg2];
  
  // Arrays for dynamic text data
  const titles = ["Hi", "Hola", "Hi","Hallo"];
  const descriptions = ["I use Python", "I use NodeJS", "I use ReactJS", "I use Typescript"];
  const data=[
    {
      title:"Hey.",
      description:"My name is Odunayo <em>but wait...</em>",
      image:headerImg,
      showTitle:false,
      showDescription:false,
      showImage:false
    },
    {
      title:"Stack.",
      description:`I have built 20+ frontends with <em>ReactJS</em>`,
      image:headerImg2,
      showTitle:true,
      showDescription:false,
      showImage:true
    },
    {
      title:"APIs.",
      description:"I have engineered and deployed over 30 APIs and business logics with <em>Python</em> and <em>nodeJS</em>",
      image:headerImg2,
      showTitle:false,
      showDescription:true,
      showImage:true
    },
    {
      title:"Work.",
      description:"I have an experience of <em>4 years</em> as a developer",
      image:headerImg2,
      showTitle:false,
      showDescription:false,
      showImage:false
    },
  ]


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndexText, setCurrentIndexText] = useState(0);
  const [isAnimatingText, setIsAnimatingText] = useState(false);


 
  useEffect(() => {
      setIsAnimating(true);
      setIsAnimatingText(true);
  }, [images.length]);
  
  
  
  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setIsAnimating(false);
      
      setTimeout(() => {
        setIsAnimating(true);
      }, 3000); // Same duration as the animation time
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimatingText(false);
      
      setTimeout(() => {
        setCurrentIndexText((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimatingText(true);
      }, 3000); 
    }, 6000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <header className='header-section'>
      {data.map((datum,index)=>{
        return(
         <div key={index} className='row '>
         {datum.showImage&&<img
           className={`img-${index+1} ${isAnimating ? 'inactive' : 'active'}`}
           src={data[currentIndex].image}
           alt='header'
         />}
         <div className={`blind ${!isAnimating ? 'active' : ''}`}></div>
         {datum.showTitle&&<h2 className={`hero-text-large ${isAnimatingText ? 'active' : ''}`}>{data[currentIndexText].title}</h2>}
         {datum.showDescription&&<p dangerouslySetInnerHTML={{__html:data[currentIndexText].description}} style={{"padding":"20px"}} className={`hero-text-small ${isAnimatingText ? 'active' : ''}`}></p>}
       </div>
      )})}
    </header>
  );
};

export default Header;
