import "./index.scss"
import ParticleBackground from "../particles"
import Cloud from "./TagCloud"
import ScreenChange from '../loader'
import { Container, Row, Col } from 'react-grid-system'

const Skill = () =>{
    return(
        <Container className='skill-container'>
            <ParticleBackground/>
            <Row align="center" justify="center" direction="row" className='row'>
                <Col xl = {5} justify="center" >
                <div className="text-zone">
                    <div class="glitch" data-text="<Proficiencies/>">
                    <div>&lt;Proficiencies/&gt;</div>
                    </div> 
                <p>Efficient and comfortable in front-end development languages such as <span className="highLight">HTML5</span>, <span className="highLight">SASS</span>, <span className="highLight">CSS3</span>, <span className="highLight">JavaScript</span>, <span className="highLight">React</span>, <span className="highLight">Node</span>, and <span className="highLight">Three.</span> <br/>
                    I am also well versed in OOP languages such as <span className="highLight">Java</span>, <span className="highLight">Python</span>, <span className="highLight">C#</span>, i'm an avid learner who is always trying to acquire new tools to add to my kit. <br/>
                    Other tools that I think are worth mentioning, is that I am very comfortable in Linux as that is my main OS, and I am also proficient in <span className="highLight">MySQL</span>.
                </p>
                </div>
                </Col>
                
                <Col xl = {7}  className="tagcloud-wrap" justify="center" >
                    <Cloud/>
                </Col>


            <ScreenChange/>
        </Row>
        </Container>
    )


}

export default Skill