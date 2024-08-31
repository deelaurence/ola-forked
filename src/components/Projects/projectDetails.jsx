import { useParams } from "react-router-dom"
// import  allProjects  from "./projectData"
import { allProjects} from "./projectData"
import { BsArrowLeft, BsArrowRight, BsArrowUpRight, BsArrowUpRightCircle } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export const Details=()=>{
    const {name}=useParams()
    let current;
    const project = allProjects.find((p,index)=>{
        current=index
        return p.title.toLowerCase()==name
    })
    const [prevLink,setPrevLink]=useState(null)
    const [nextLink,setNextLink]=useState(null)
    useEffect(()=>{
        if(current+1!==allProjects.length){
            setNextLink(allProjects[current+1].title.toLowerCase())
        }
        else{
            setNextLink(null)
        }
        if(current!==0){
            setPrevLink(allProjects[current-1].title.toLowerCase())
        }
        else{
            setPrevLink(null)
        }
    },[current])
    
    const {link,title,images,tags,paragraphs,date,about,role}=project
    return(
        <>
        <section className="detail-section">
            
            
            <h3 className="detail-title">{title}</h3>
            <p className="about-details">{about}</p>
            <div className="tags-details" >
                {tags.map((tag,index)=>{
                    return(
                        <p key={index}> {tag}* &nbsp;    </p>
                    )})}
            </div>
            <div>
                <p className="role-details">{role}</p>
                <p>{date}</p>
            </div>
            <div className="links-cont">
                <a className="details-link" href={link}>Visit live <BsArrowUpRightCircle/> </a>
                <Link className={`${nextLink?"":"disable"}  details-link`} to={`/project/${nextLink??name}`} >Next <BsArrowRight/> </Link>
                <Link className={`${prevLink?"":"disable"}  details-link`} to={`/project/${prevLink??name}`} > <BsArrowLeft/> Back  </Link>
            </div>
            <p className="paragraph-details">{paragraphs[0]}</p>
            <img src={images[0]} alt={`${name} Image one`} />
            <p className="paragraph-details">{paragraphs[1]}</p>
            <img src={images[1]} alt={`${name} Image two`} />
            <p className="paragraph-details">{paragraphs[2]}</p>
            {images[2]&&<img src={images[2]} alt={`${name} Image three`} />}
            <div className="links-cont">
                <a className="details-link" href={link}>Visit live <BsArrowUpRightCircle/> </a>
                <Link className={`${nextLink?"":"disable"}  details-link`} to={`/project/${nextLink??name}`} >Next <BsArrowRight/> </Link>
                <Link className={`${prevLink?"":"disable"}  details-link`} to={`/project/${prevLink??name}`} > <BsArrowLeft/> Back  </Link>
            </div>
        </section>
        </>
    )
}