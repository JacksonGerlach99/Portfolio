import './index.scss'
import ParticleBackground from '../particles'
import Art from './Art'
import ScreenChange from '../loader'



const About = () => {

    return (
        <div className='about-page'>
            <ParticleBackground/>
            <div className='text-zone'>
            <div class="glitch" data-text="<About Me/>">
            <div>&lt;About Me/&gt;</div>
                </div> 
                <div class="glow"><div>&lt;About Me/&gt;</div>
                </div>
            
            <p>I'm a Computer Science Undergradute student at the university of Victoria, B.C. Canada. I'm an <span className="highLight">avid learner</span> with a <span className="highLight">strong work ethic</span>, <span className="highLight">time management</span> and interpsonal <span className="highLight">communications skills</span>. I have been working with computers since a young age, hardware and software wise. I Grew up moving around a lot making me very adaptable to different envoirments. In my free time I enjoy exercising, coding, and small social gatherings!</p>
            </div>

        <div className='right-side'>
            <Art/>
        </div>
            <ScreenChange/>
        </div>
    )
}

export default About