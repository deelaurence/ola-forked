import myreel from "../../assets/myreel.gif"
import { navLinks } from "../../data"
export const About=()=>{
   
    return(
        <>
        <section className="detail-section">
            
            
            <h3 className="detail-title">***</h3>
            <p className="about-details">ALO &mdash; Odunayo</p>
            <div className="tags-details" >
                {['Python',"React", "nodeJS", "expressJS", "postgreSQL", "django", "typescript"].map((tag,index)=>{
                    return(
                        <p key={index}> {tag}* &nbsp;    </p>
                    )})}
            </div>
            <div>
                <p className="role-details">Fullstack Developer</p>
            </div>
            <div className="myreel-cont">
                <img src={myreel} alt="" />
            </div>
            <p className="paragraph-details">
                I started programming with <em>Kotlin.</em> I found the whole 
                programming world quite fun and the tutorial was super easy to follow
                <br/>
                <br/>
                <em>until it was time to code...</em> 
                <br/>
                <br/>
                Nothing worked! Android Studio was throwing strings of errors. I spent days 
                making sure I have entered the same same set of characters as
                the tutor. I googled and googled &mdash; nothing worked
                <br/>
                <br/>
            </p>
            
            <div className="paragraph-details">
                <p className="role-details">Broken</p>
                <br />
                    I was broken, my code was broken. Until one morning
                    I just woke up feeling confident I have the fix. I don't 
                    even know how but it just worked! I was so happy and I loved the feeling
            </div>
            <div className="paragraph-details">
                <p className="role-details">Web</p>
                <br />
                I started learning Javascript later on and got an internship at KodeCamp as a nodeJS 
                developer where I built the api to serve an ecommerce website with <em>nodeJS(express) </em> 
                and mongodb. <br /><br /> After kodecamp I worked at HNG, Onicon, SkyStudio, InstaOps where I developed appications with reactJS, and then
                started using python(django) for fullstack development.  
            </div>
            <div className="paragraph-details">
                <p className="role-details">When not coding</p>
                <br />
                I love being indoors, I love jazz music and play the piano.
                <br /><br/>
                I also take time to <a style={{textDecoration:'underline'}} href={navLinks.blog}>write</a> on programming concepts and tools.
                <br /><br />
                I love jazz music, I love watching dark clouds, I love the sound of french words.
                <em> ounchanté. </em> 
                I wish I could write with my left hand 
            </div>
            {/* <img src={images[1]} alt="" />
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