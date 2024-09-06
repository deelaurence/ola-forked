import React, {useRef, useEffect, useState,useLayoutEffect } from 'react';
import headerImg from '../../assets/y.webp';
import headerImg2 from '../../assets/h.webp';
import headerImg3 from '../../assets/mom2.webp';
import headerImg4 from '../../assets/z.webp';
import headerImg5 from '../../assets/oniconc.webp'
import headerImg6 from '../../assets/flo6.webp'
import headerImg7 from '../../assets/flo(5).webp'

import { allProjects } from '../Projects/projectData';
import gsap from 'gsap';
import useScrollBlock from '../../customHooks/preventScroll'


const Header = () => {
  let images=[headerImg,headerImg2,headerImg3,headerImg4]
  const [isDesktop,setIsDesktop]=useState(window.innerWidth>768);
  if(isDesktop){
    images=[headerImg5,headerImg,headerImg7,headerImg4]
  }  
  const animationInterval = 8000
  const preloaderDoneTime= 8000
  const [blockScroll, allowScroll] = useScrollBlock();

  useEffect(() => {
    // console.log(blockScroll)
    // Block scrolling when the component mounts
    blockScroll();
    // Allow scrolling again after some seconds
    const timer = setTimeout(() => {
      allowScroll();
    }, preloaderDoneTime);

    // Clean up: allow scrolling if the component unmounts before 3 seconds
    return () => {
      clearTimeout(timer);
      allowScroll();
    };
  }, []);



  //A list of titles: to be used later?
  let allTitles = allProjects.map((item)=>{
    return(item.title)
  })

  const preloaderREf=useRef(null)
  const p1REf=useRef(null)
  const p2REf=useRef(null)
  const p3REf=useRef(null)
  const p4REf=useRef(null)
  const p1CoverREf=useRef(null)
  const p2CoverREf=useRef(null)
  const p3CoverREf=useRef(null)
  const p4CoverREf=useRef(null)
  const headerRef=useRef(null)
  const imgRef=useRef(null)
  const img=imgRef.current
  const header=headerRef.current
  const preloader = preloaderREf.current
  const p1 = p1REf.current
  const p2 = p2REf.current
  const p3 = p3REf.current
  const p4 = p4REf.current
  const p1Cover = p1CoverREf.current
  const p2Cover = p2CoverREf.current
  const p3Cover = p3CoverREf.current
  const p4Cover = p4CoverREf.current

  
  useEffect(()=>{
    const handleResize=()=>setIsDesktop(window.innerWidth>768)
    window.addEventListener('resize',handleResize)
    return ()=> window.removeEventListener('resize',handleResize);
  })



  //GSAP for preloader
  const primaryColor='#1E1915';
  const secondaryColor='#EEE9CC';
  useEffect(()=>{
  gsap.to(preloader, {
    opacity:'0',
    duration:1,
    delay:4,
  })
  gsap.to(preloader, {
    filter:'blur(2px)',
    delay:1.5,
    duration:1
  })
  gsap.to(preloader, {
    display:'none',
    delay:6,
  })
  gsap.to(preloader, {
    background:primaryColor,
    delay:2,
    duration:1,
  })
  gsap.fromTo(header, {
    filter:'grayscale(100%) blur(3px)',
  },{
    delay:5,
    duration:.4,
    filter:'grayscale(0) blur(0px)',
    opacity:1
  })


  //One
  gsap.fromTo(p1, {
    translateX:20,
  },{

    duration:1,
    translateX:-20,
  })
  gsap.to(p1, {
    opacity:0,
    duration:1,
    
  })
  

  //Two
  gsap.fromTo(p2, {
    translateX:-20,
    filter:'blur(1px)'
  },{

    duration:.5,
    translateX:0,
  })
  gsap.to(p2, {
    opacity:0,
    duration:1,
    
  })


  //Three
  gsap.fromTo(p3, {
    translateX:20,
  },{

    duration:1,
    translateX:-50,
  })

  gsap.to(p3,{
    opacity:0,
    delay:3
  })


  //Four
  gsap.fromTo(p4, {
    translateX:-70,
  },{
    duration:1,
    translateX:-80,
  })

  gsap.to(p4, {
    background:primaryColor,
    color:secondaryColor,
    delay:2,
    duration:1
  })
  
  //cover one
  gsap.to(p1Cover, {
    width:0,
    duration:1
  })
  //cover two
  gsap.to(p2Cover, {
    width:0,
    duration:1,
  })
  //cover three
  gsap.to(p3Cover, {
    width:0,
    duration:1,
  })
  
  //cover four
  gsap.to(p4Cover, {
    width:0,
    duration:1,
  })
  

  },[preloader])

  
  //setting all titles to empty makes sure nothing is
  //animated in the first and last row
  allTitles=['','','']
  


  
  // Arrays for dynamic text data
  const data=[
    {
      title:"Hi.",
      description:"My name is <em>Odunayo</em>",
      image:images[0],
      showTitle:false,
      showDescription:false,
      alternateText:allTitles,
      showImage:true,
    },
    {
      title:"Stack.",
      description:`I have built 20+ frontends with <em>React</em> and <em>NextJS</em>`,
      image:images[1],
      showTitle:true,
      showDescription:false,
      showImage:true
    },
    {
      title:"&",
      description:"I have engineered and deployed over 30 APIs and business logics with <em>Python</em> and <em>nodeJS</em>",
      image:images[2],
      showTitle:false,
      showDescription:true,
      showImage:true
    },
    {
      title:"Work.",
      description:"I have an experience of <em>4 years</em> as a developer",
      image:images[3],
      showTitle:false,
      showDescription:false,
      showImage:true,
      alternateText:allTitles
    },
  ]


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentIndexText, setCurrentIndexText] = useState(0);
  const [isAnimatingText, setIsAnimatingText] = useState(false);

  
  const imgRefs=useRef([])  


  //Change Image
  useEffect(()=>{
    if(isAnimating===true){
    
    const timeoutId = setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, animationInterval/4);
    return () => clearTimeout(timeoutId);
    }
  },[isAnimating])
  


  
  //toggle Image Opacity 
  useEffect(()=>{
    if(isAnimating===true){
    const timeoutId = setTimeout(() => {
      
      imgRefs.current.forEach((img)=>{
        if(img){
          img.style.opacity="0"
        }
    })
    const timeoutId2 = setTimeout(() => {
      
      imgRefs.current.forEach((img)=>{
        if(img){
          img.style.opacity="1"
        }
      })
    }, animationInterval/4);
    return () => clearTimeout(timeoutId2)

    }, animationInterval/4);
    
    return () =>clearTimeout(timeoutId);
    }
  },[isAnimating])
  


 

  //RUN first animation immediately without delay
  useEffect(() => {
      setIsAnimating(true);
      setIsAnimatingText(true);
  }, [images.length]);
  
  
  
  //Animate Blind
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(false);
      
      setTimeout(() => {
        setIsAnimating(true);
      }, animationInterval/2); // Same duration as the animation time
    }, animationInterval);
    
    return () => clearInterval(intervalId);
  }, [images.length]);
  
  

  //ANIMATE TEXT
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimatingText(false);
      
      setTimeout(() => {
        setCurrentIndexText((prevIndex) => (prevIndex + 1) % images.length);
        setIsAnimatingText(true);
      }, animationInterval/2); 
    }, animationInterval);
    
    return () => clearInterval(intervalId);
  }, [images.length]);
        
        
  return (
    
  <>
    <section ref={preloaderREf} className='preloader'>
      <div>
       <div>
        <p ref={p1CoverREf} className='preloader-cover1'></p>
        <p ref={p1REf} className='preloader-p1'>Welcome</p>
       </div>
       <div>
        <p ref={p2CoverREf} className='preloader-cover2'></p>
        <p ref={p2REf} className='preloader-p2'>Welcome</p>
       </div>
       <div>
        <p ref={p3CoverREf} className='preloader-cover3'></p>
        <p ref={p3REf} className='preloader-p3'>Welcome</p>
       </div>
       <div>
        <p ref={p4CoverREf} className='preloader-cover4'></p>
        <p ref={p4REf} className='preloader-p4'>Welcome</p>
       </div>
      </div>
    </section>
    <div className='grain-effect'>

    </div>
    <header ref={headerRef} className='header-section'>
      
      {data.map((datum,index)=>{
        return(
         <div key={index} className='row '>
         {datum.showImage&&<img
           className={`img-${index+1} header-img ${isAnimating ? 'inactive' : 'active'}`}
           ref={(el)=>(imgRefs.current[index]=el)}
           src={data[currentIndex].image}
           alt='header'
         />}
         <div className={`blind-${index} ${!isAnimating ? 'active' : ''}`}></div>
         {datum.showTitle&&<h2 className={`hero-text-large ${isAnimatingText ? 'active' : ''}`}>{data[currentIndexText].title}</h2>}
          <div className='alternate-text' >
          {datum.alternateText?datum.alternateText.map((d,i)=>{
            return(
                <p key={i}>{d}</p>
            )
          }):null}
         </div>
          {/* <div className='alternate-text' >
          {datum.alternateText?datum.alternateText.map((d,i)=>{
            return(
                <p key={i}>{d}</p>
            )
          }):null}
         </div> */}
         {datum.showDescription&&<p dangerouslySetInnerHTML={{__html:data[currentIndexText].description}} style={{"padding":"20px"}} className={`hero-text-small ${isAnimatingText ? 'active' : ''}`}></p>}
       </div>
      )})}
    </header>
  </>
  );
};

export default Header;
