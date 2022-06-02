import "./index.scss"
import ParticleBackground from "../particles"
import Cloud from "./TagCloud"
import ScreenChange from '../loader'

const Skill = () =>{
    return(
        <div className="skill-container">
            <ParticleBackground/>
            <div className="text-zone">
                <div class="glitch" data-text="<Proficiencies/>">
                <div>&lt;Proficiencies/&gt;</div>
                </div> 
                <div class="glow"><div>&lt;Proficiencies/&gt;</div>
                </div>
            <p>Efficient and comfortable in front-end developement languages such as <span className="highLight">HTML5</span>, <span className="highLight">SASS</span>, <span className="highLight">CSS3</span>, <span className="highLight">JavaScript</span>, <span className="highLight">React</span>, <span className="highLight">Node</span>, and <span className="highLight">Three.</span> <br/>
                I am also well versed in OOP languages such as <span className="highLight">Java</span>, <span className="highLight">Python</span>, <span className="highLight">C#</span>, i'm an avid learner who is always trying to aquire new tools to add to my kit. <br/>
                Other tools that I think are worth mentioning, is that I am very comfortable in Linux as that is my main OS, and I am also proficient in <span className="highLight">MySQL</span>.
            </p>
            </div>
            <div className="tagcloud-wrap">
                <Cloud/>
            </div>

        <ScreenChange/>

        </div>
    )


}

export default Skill