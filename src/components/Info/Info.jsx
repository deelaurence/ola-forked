import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { experiences } from './workExperience';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

const Info = () => {
  const [count, setCount]=useState(0)
  const h2= document.querySelector('.h2')
  const h1Ref=useRef()
  const h1= h1Ref.current
  const workCont = document.querySelector(".work-cont")
  
  let [currentWork, setCurrentWork]=useState(0)
  const [workData,setWorkData]=useState(experiences)
  let raw_number=0
  useEffect(() => {
    let number;
    number=workData.length
    const intervalId = setInterval(() => {
      raw_number++     
      setCurrentWork(currentWork=>(currentWork+1)%number)
      if(workCont){
        workCont.style.transform=`translateY(-${raw_number*45}px)`
        if(raw_number==workData.length){
          raw_number=0
        }  
      }
    }, 4000);

    return () => clearInterval(intervalId);
  },[workData,workCont]);



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
              end:"top 50%"
        }

          })
      gsap.fromTo(h2, {
          xPercent:-50,
      },
          {
              xPercent:5,
              scrollTrigger: {
              scrub:3,
              trigger: h2,
              start: "top bottom",
              end:"top 50%"
        }

          })
          return () => clearInterval(initiateAnimation);
  },[count])
  return (
    <>
    <section className='info-section'>
      <div className='info1'>
      <h1 ref={h1Ref} className='h1'>
        I have <em>4 years*</em> fullstack web experience using React, MongoDB, NodeJS, Python(Django) and postgreSQL 
      </h1>
      </div>
      <div className='info2'>
      <h1 className='h2'>
        I have 4 years fullstack web experience using React, MongoDB, NodeJS, Python(Django) and postgreSQL 
        {/* I Create new Ideas and develop them with flutterwave and firebase */}
      </h1>
      </div>
    </section >
      <section className='experience-cont'>
        <h3 className='work-experience'>Work Experience*</h3>
        <div className='experiences'>
          <div className='work-cont'>
            {
              workData.map((work,index)=>{
                return(
                  <p key={index} className={currentWork==index?`active-project`:""}>
                    {work}
                  </p>
                )
              })
            }
          </div>
        </div>
      </section>
      </>
  );
};

export default Info;
