import React, { useEffect, useState } from 'react';
import {  useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { BsArrowUp } from 'react-icons/bs';
import { projects } from '../../data';
import { allProjects } from './projectData';


const Projects = () => {
  const [count, setCount]=useState(0)
  const [activeIndex, setActiveIndex] = useState(null);
  
  const h1Ref=useRef()
  const h1 = h1Ref.current

  useEffect(()=>{

  })
   useEffect(() => {
    const initiateAnimation = setTimeout(() => {
            setCount(1)
    }, 1500)
        
        
      gsap.fromTo(h1, {
          xPercent:0,
      },
          {
              xPercent:-100,
              duration:10,
              scrollTrigger: {
              trigger: h1,
              toggleActions:"play none reverse none",
              start: "top center",
              end:"top 30%"
        }

          })
        
          return () => clearInterval(initiateAnimation);
  },[count])
  return (
    <section className='projects-section'>
      <div className='wrapper'>
        <h1 ref={h1Ref} className='title'>Feautured Works</h1>
        
      </div>
      <div className='projects'>
        {allProjects.map((project, projectIndex) => {
          return (
            <div key={projectIndex}>
              <MobileProject 
                project={project} 
                projectIndex={projectIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                 />
              <DestopProject 
                project={project} 
                projectIndex={projectIndex}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                 />
              {/* <MobileProject project={project} projectIndex={projectIndex} />
              <MobileProject project={project} projectIndex={projectIndex} /> */}
              {/* <DestopProject project={project} projectIndex={projectIndex} /> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const MobileProject = ({ project, projectIndex, activeIndex, setActiveIndex }) => {
  const { images, title, paragraphs, date,about,role, tags } = project;
  const [index, setIndex] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide(activeSlide + 1);
    }, 3000);
    if (activeSlide > images.length - 1) {
      setActiveSlide(0);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [activeSlide]);

  return (
    <article className='mob-project' key={projectIndex}>
      <div
        className='title'
        onClick={() => {
          setActiveIndex(projectIndex === activeIndex ? null : projectIndex);
        }}
      >
        <div>
          {title} <span className='span-date' >&mdash; {date}</span>  
        </div>  
        <span className={projectIndex === activeIndex ? `active` : ''}>
          <BsArrowUp />
        </span>
      </div>
      <div className={`info  ${projectIndex === activeIndex ? `active` : ''}`}>
        <div className='row'>
          <h4>{about}</h4>
          <h4>{date}</h4>
        </div>
        <p>{tags.map((tag,index)=>{
          return(
            <span key={index}>{tag}. </span>
          )
        })}</p>
        <Link className='view-details' to={`/project/${title.toLowerCase()}`}>View</Link>
        <div className='slides'>
          {images.map((slide, slideIndex) => {
            return (
              <div className='slide-cont' key={slideIndex}>
                <img
                  src={slide}
                  alt='slide 1'
                  key={slideIndex}
                  className={activeSlide === slideIndex ? `active` : null}
                  />
              </div>
            );
          })}
          <div className='pagination'>
            {images.map((_, index) => {
              return (
                <span
                  key={index}
                  className={activeSlide === index ? `active` : null}
                  onClick={() => setActiveSlide(index)}
                ></span>
              );
            })}
          </div>
        </div>
      </div>
      
    </article>
  );
};

const DestopProject = ({ project, projectIndex,activeIndex,setActiveIndex }) => {
  const { images, title, about, date,paragraphs,tags } = project;
  const [index, setIndex] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const projectRef=useRef()
  const scrollProject=projectRef.current
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  useEffect(()=>{
    if(projectIndex==activeIndex){
      // scrollProject.scrollIntoView({
      //   behavior:'smooth',
      //   block:'center'
      // })
    }
  },[activeIndex])
  return (
    <article className='desktop-project' key={projectIndex}>
      <div
        className='brief'
        onClick={() => {
          setActiveIndex(projectIndex === activeIndex ? null : projectIndex);
        }}
      >
        <h2 className='proj-name'>{title} <span>&mdash; {date}</span> </h2>
        <h2 className='proj-desc'>{about}</h2>
        <h2 className='proj-date'>
          
          <span className={projectIndex === activeIndex ? `active` : null}>
            <BsArrowUp />
          </span>
        </h2>
      </div>
      <div ref={projectRef} className={`details desktop-down ${projectIndex === activeIndex ? `active` : null}`}>
        <div className='slides'>
          {images.map((slide, slideIndex) => {
            return (
              <img
                src={slide}
                alt={`slide ${slideIndex + 1}`}
                key={slideIndex}
                className={activeSlide === slideIndex ? `active` : ''}
                />
              );
            })}
          <div className='pagination'>
            {images.map((_, index) => {
              return (
                <span
                key={index}
                className={activeSlide === index ? `active` : ''}
                onClick={() => setActiveSlide(index)}
                ></span>
              );
            })}
          </div>
        </div>
        <div className='project-aside'>
          <h2 className='title'>{title} </h2>
          <h3 className='more-info'>{paragraphs[0]}</h3>
          <Link className='view-details-desktop' to={`/project/${title.toLowerCase()}`}>View</Link>
        </div>
      </div>
    </article>
  );
};


export default Projects;
