import React, { useEffect, useRef, useState } from 'react';
import reel from '../../assets/reel.gif';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  let cardRef = useRef([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const initiateAnimation = setTimeout(() => {
      setCount(1);
    }, 20);
      gsap.fromTo(
        cardRef.current,
        {
          y: 30, // Start position (below the element)
          opacity: 0,
        },
        {
          y: 0, // End position (in the natural position)
          opacity: 1,
          stagger: 0.2, // Delay between each letter animation
          duration: .5,
          ease: "ease-out", // Smooth easing for a natural effect
          scrollTrigger: {
            trigger: ".p-cont",
            toggleActions: "play none none none",
            start: "top 80%", // Start animation when top of the element is 80% down the viewport
            end: "top 30%",
          },
        }
      );
    

    return () => clearTimeout(initiateAnimation);
  }, []);

  return (
    <section className='about-section'>
      <div className='top'>
        <img src={reel} alt="reel" />
        <h1 className='p-cont'>
          <p ref={(el) => (cardRef.current[0] = el)}>M</p>
          <p ref={(el) => (cardRef.current[1] = el)}>y</p>
          <p ref={(el) => (cardRef.current[2] = el)}> N</p>
          <p ref={(el) => (cardRef.current[3] = el)}>a</p>
          <p ref={(el) => (cardRef.current[4] = el)}>m</p>
          <p ref={(el) => (cardRef.current[5] = el)}>e</p>
          <p ref={(el) => (cardRef.current[6] = el)}> i</p>
          <p ref={(el) => (cardRef.current[7] = el)}>s</p>
          <p ref={(el) => (cardRef.current[8] = el)}> O</p>
          <p ref={(el) => (cardRef.current[9] = el)}>d</p>
          <p ref={(el) => (cardRef.current[10] = el)}>u</p>
          <p ref={(el) => (cardRef.current[11] = el)}>n</p>
          <p ref={(el) => (cardRef.current[12] = el)}>a</p>
          <p ref={(el) => (cardRef.current[13] = el)}>y</p>
          <p ref={(el) => (cardRef.current[14] = el)}>o</p>
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
