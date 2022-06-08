
import ParticleBackground from '../particles'
import '../../App.scss' 
import { Link } from 'react-router-dom'
import './index.scss'
import App from './globe/index'
import { Container, Row, Col } from 'react-grid-system'


const Home = () => {

    return (
        <Container className="home-page">
            <Row align="center" justify="center" direction="row" className='row'>
                
                    <ParticleBackground/>
                    
                    <Col xl = {5.5}  align="center">
                    <div className="text-zone">
                        <div className='Title'>
                            <div class="glitch" data-text="JacksonG.">
                                JacksonG.
                            </div> 
                            <div class="glow">JacksonG.
                            </div>
                        </div>
                            <p className='subtitle' >Junior Full Stack Developer And Software Engineer</p>


                    <Link to="/contact" className="contact-button">
                        CONTACT ME
                    </Link>
                    </div>
                    </Col>
                    <Col xl = {6.5} align= "center" >
                    <div className='right-side'>
                        <App/>
                    </div>
                    </Col>
                
            </Row>
        </Container>
    );


}

export default Home