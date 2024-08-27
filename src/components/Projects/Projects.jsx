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
        <div className='mini-grid-desktop'>
          <h3>Project</h3>
          <h3>Description</h3>
          <h3>Date</h3>
        </div>
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

// const DestopProject = ({ project, projectIndex }) => {
//   const { date, desc, moreInfo, name, slides } = project;
//   const [index, setIndex] = useState();
//   const [activeSlide, setActiveSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveSlide(activeSlide + 1);
//     }, 3000);
//     if (activeSlide > slides.length - 1) {
//       setActiveSlide(0);
//     }
//     return () => clearInterval(interval);
//     // eslint-disable-next-line
//   }, [activeSlide]);

//   return (
//     <article className='desktop-project' key={projectIndex}>
//       <div
//         className='brief'
//         onClick={() => {
//           setIndex(projectIndex);
//           if (index === projectIndex) {
//             setIndex();
//           }
//         }}
//       >
//         <h2 className='proj-name'>{name}</h2>
//         <h2 className='proj-desc'>{desc}</h2>
//         <h2 className='proj-date'>
//           {date}{' '}
//           <span className={projectIndex === index ? `active` : null}>
//             <BsArrowUp />
//           </span>
//         </h2>
//       </div>
//       <div className={`details ${projectIndex === index ? `active` : null}`}>
//         <div className='slides'>
//           {slides.map((slide, slideIndex) => {
//             return (
//               <img
//                 src={slide}
//                 alt='slide 1'
//                 key={slideIndex}
//                 className={activeSlide === slideIndex ? `active` : null}
//               />
//             );
//           })}
//           <div className='pagination'>
//             {slides.map((_, index) => {
//               return (
//                 <span
//                   key={index}
//                   className={activeSlide === index ? `active` : null}
//                   onClick={() => setActiveSlide(index)}
//                 ></span>
//               );
//             })}
//           </div>
//         </div>
//         <h3 className='more-info'>{moreInfo}</h3>
//       </div>
//     </article>
//   );
// };

export default Projects;
