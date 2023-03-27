import React from 'react';
import { useEffect, useRef, useState } from 'react';

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Info = () => {
  const [count, setCount]=useState(0)
  const h2= document.querySelector('.h2')
  const h1Ref=useRef()
  const h1= h1Ref.current
  
   useEffect(() => {

    const initiateAnimation = setTimeout(() => {
            setCount(1)
        }, 1500)
        
        
      gsap.fromTo(h1, {
          xPercent:50,
      },
          {
              xPercent:0,
              scrollTrigger: {
              scrub:2,
              trigger: h1,
              start: "top bottom",
              end:"top 30%"
        }

          })
      gsap.fromTo(h2, {
          xPercent:-50,
      },
          {
              xPercent:0,
              scrollTrigger: {
              scrub:3,
              trigger: h2,
              start: "top bottom",
              end:"top 30%"
        }

          })
        
          return () => clearInterval(initiateAnimation);
  },[count])
  return (
    <section className='info-section'>
      <div className='info1'>
      <h1 ref={h1Ref} className='h1'>
        I Create new Ideas and develop them with flutterwave and firebase
      </h1>
      </div>
      <div className='info2'>
      <h1 className='h2'>
        I Create new Ideas and develop them with flutterwave and firebase
      </h1>
      </div>
    </section>
  );
};

export default Info;
