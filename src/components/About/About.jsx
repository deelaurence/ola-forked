import { useParams } from "react-router-dom"
// import  allProjects  from "./projectData"
import { allProjects} from "./projectData"
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsArrowUpRightCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const About=()=>{
   
    return(
        <>
        <section className="detail-section">
            
            
            <h3 className="detail-title">Me</h3>
            <p className="about-details">about</p>
            <div className="tags-details" >
                {['software',"design"].map((tag,index)=>{
                    return(
                        <p key={index}> {tag}* &nbsp;    </p>
                    )})}
            </div>
            <div>
                <p className="role-details">Fullstack</p>
                <p>2020</p>
            </div>
            {/* <p className="paragraph-details">{paragraphs[0]}</p>
            <img src={images[0]} alt="" />
            <p className="paragraph-details">{paragraphs[1]}</p>
            <img src={images[1]} alt="" />
            <p className="paragraph-details">{paragraphs[2]}</p>
            <img src={images[2]} alt="" />
            <div className="links-cont">
                <a className="details-link" href={link}>Visit live <BsArrowUpRightCircle/> </a>
                <Link className={`${nextLink?"":"disable"}  details-link`} to={`/project/${nextLink??name}`} >Next <BsArrowRight/> </Link>
                <Link className={`${prevLink?"":"disable"}  details-link`} to={`/project/${prevLink??name}`} > <BsArrowLeft/> Back  </Link>
            </div> */}
        </section>
        </>
    )
}