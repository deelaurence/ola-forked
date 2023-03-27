import React from 'react';
import headerImg from '../../assets/header-bg.webp';
import headerImg2 from '../../assets/slide1.webp';
import headerImg3 from '../../assets/slide2.webp';
import headerImg4 from '../../assets/slide3.webp';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
// import {Scroll}
    


const Header = () => {
const img1Ref = useRef()
const img1 = img1Ref.current
const img2Ref = useRef()
const img2 = img2Ref.current
const img3Ref = useRef()
const img3 = img3Ref.current
const img4Ref = useRef()
const img4 = img4Ref.current
const blind = document.querySelectorAll('.blind')
const images = [headerImg, headerImg2, headerImg3, headerImg4];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [count, setCount]=useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 3000)
        
        return () => clearInterval(intervalId);
    })
  useEffect(() => {

    const initiateAnimation = setTimeout(() => {
            setCount(1)
        }, 1500)
        
        
        gsap.fromTo(blind, {
          
          yPercent:100,
          scale:1,
          // skewX:"30deg",
  
      },
          {
              yPercent:0,
              skewX:"0deg",
              duration:1.5,
              ease:"Power2.easeIn",
              delay:1.5,
              repeat:-1,
              yoyo:true
          })
        gsap.fromTo(img1, {
          // opacity:0,
          skewX:".5deg",
          scale:1
  
      },
          {
              scale:1.2,
              skewX:"0deg",
              opacity:1,
              ease:"Power2.easeIn",
              duration:1.5,
              delay:1.5,
              repeat:-1,
              yoyo:true
          })
        gsap.fromTo(img2, {
          // opacity:0,
          skewX:".5deg",
          scale:1
  
      },
          {
              scale:1.5,
              skewX:"0deg",
          opacity:1,
          ease:"Power2.easeIn",
              duration:1.5,
              delay:1.5,
              repeat:-1,
              yoyo:true
          })
        gsap.fromTo(img3, {
          // opacity:0,
          skewX:".5deg",
          scale:1
  
      },
          {
          scale:1.2,
          skewX:"0deg",
          opacity:1,
          ease:"Power2.easeIn",
          duration:1.5,
          delay:1.5,
          repeat:-1,
          yoyo:true
          })
        gsap.fromTo(img4, {
          
          scale:1,
          // opacity:0,
          skewX:".5deg",

  
      },
          {
              scale:1.1,
              skewX:"0deg",
              
              ease:"Power2.easeIn",
              opacity:1,
              duration:1.5,
              delay:1.5,
              repeat:-1,
              yoyo:true
          })
          return () => clearInterval(initiateAnimation);
  },[count])
  
  return (
    <header className='header-section'>
      <div className='bg'>
        <img src={images[currentIndex]} alt='header' />
      </div>
      <div className='row'>
        <img ref={img1Ref} className='img-1' src={images[currentIndex]} alt='header' />
        <div className='blind'></div>
        <h2>Microservices</h2>
        <p>Brand Design</p>
      </div>
      <div className='row col-end'>
        <img ref={img2Ref} className='img-2' src={images[currentIndex]} alt='header' />
        <div className='blind'></div>
        <p>Brand Design</p>
        <h2>Dart</h2>
      </div>
      <div className='row'>
        <img ref={img3Ref} className='img-3' src={images[currentIndex]} alt='header' />
        <div className='blind'></div>
        <h2>Mobile Developer</h2>
        <p>Brand Design</p>
      </div>
      <div className='row col-end'>
        <img ref={img4Ref} className='img-4' src={images[currentIndex]} alt='header' />
        <div className='blind'></div>
        <p>Brand Design</p>
        <h2>Creative Developer</h2>
      </div>
    </header>
  );
};

export default Header;
