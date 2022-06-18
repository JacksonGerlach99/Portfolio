import './index.scss'
import ParticleBackground from '../particles'
import Art from './Art'
import ScreenChange from '../loader'
import { Container, Row, Col } from 'react-grid-system'



const About = () => {

    return (
        <Container className='about-page'>
            <ParticleBackground/>
                <Row align="center" justify="center" direction="row" className='row'>
                    <Col md ={12} lg = {12} xl = {12} xxl={5} >
                    <div className='text-zone'>
                    <div class="glitch" data-text="<About Me/>">
                    <div>&lt;About Me/&gt;</div>
                        </div> 
                    
                    <p>I'm a Computer Science Undergraduate student at the university of Victoria, B.C. Canada. I'm an <span className="highLight">avid learner</span> with a <span className="highLight">strong work ethic</span>, <span className="highLight">time management</span> and interpersonal  <span className="highLight">communications skills</span>. I have been working with computers since a young age, hardware and software wise. I Grew up moving around a lot making me very adaptable to different environments. In my free time I enjoy exercising, coding, and small social gatherings!</p>
                    </div>
                    </Col>

                    <Col md ={12} lg = {10} xl = {10} xxl={7}   align="center" className='right-side-about'>
                        <Art/>
                    </Col>
                <ScreenChange/>
                </Row>
        </Container>
        
    )
}

export default About