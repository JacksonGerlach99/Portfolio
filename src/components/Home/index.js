
import ParticleBackground from '../particles'
import '../../App.scss' 
import { Link } from 'react-router-dom'

import './index.scss'
import App from './globe/index'


const Home = () => {

    return (
        <div className="home-page">
            <ParticleBackground/>
            <party/>
            <div className="text-zone">
                <div class="glitch" data-text="JacksonG.">
                     JacksonG.
                </div> 
                <div class="glow">JacksonG.
                </div>
                    <p className='subtitle' >Junior Full Stack Developer And Software Engineer</p>
            <Link to="/contact" className="contact-button">
                CONTACT ME
            </Link>
            </div>
            <div className='right-side'>
                <div className='control'>
                <App/>
                </div>
            </div>
        </div>
    );





}

export default Home