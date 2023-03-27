import React from 'react';
import video from '../../assets/video.mp4'
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const span = document.querySelector('span')
const span1 = document.querySelector('.class1')
const About = () => {
let cardRef = useRef([]);
const [count, setCount]=useState(0)
const h1 = document.querySelector('.span-cont')
console.log(cardRef);
  // const h1Ref=useRef()
  // const h1= h1Ref.current
   useEffect(() => {
    const initiateAnimation = setTimeout(() => {
            setCount(1)
        }, 1500)
        
        
      gsap.fromTo(cardRef.current, {
          yPercent:50,
          color:'#ffd700',
      },
          {
              yPercent:10,
              color:'#EEE9CC',
              stagger:0.2,
              duration:.8,
              scrollTrigger: {
              trigger:h1,
              // scrub:2,
              // repeat:-1,
              toggleActions: "play none reverse restart",
              start: "top center",
              end:"top 90%"
        }
          })
      // gsap.fromTo(h2, {
      //     xPercent:-50,
      // },
      //     {
      //         xPercent:0,
      //         scrollTrigger: {
      //         scrub:3,
      //         trigger: h2,
      //         start: "top bottom",
      //         end:"top 30%"
      //   }

      //     })
        
          return () => clearInterval(initiateAnimation);
  })
  return (
    <section className='about-section'>
      <div className='top'>
        <video autoPlay muted preload='auto' loop src={video}></video>
        <h1 className='span-cont'>          
          <span ref={element => {cardRef.current[0] = element;}}>Fr</span>
          <span ref={element => {cardRef.current[1] = element;}}>om</span>
          <span ref={element => {cardRef.current[2] = element;}}> fi</span>
          <span ref={element => {cardRef.current[3] = element;}}>gm</span>
          <span ref={element => {cardRef.current[4] = element;}} >a</span>
          <span ref={element => {cardRef.current[5] = element;}}> to</span>
          <span ref={element => {cardRef.current[6] = element;}}> da</span>
          <span ref={element => {cardRef.current[7] = element;}}>rt</span>
        </h1>
      </div>

      <div className='bottom'>
        <article>
          <p>
            Do you want to gain notoriety, distinguish yourself with unique
            communication, and collaborate with an involved professional?
          </p>
        </article>
        <article>
          <p>
            I will accompany you on all aspects of your visual communication.
            It's a promise I will keep because I admire your work, I carry out
            mine with passion, and I share the same values as you.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
