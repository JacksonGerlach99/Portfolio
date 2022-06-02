import "./index.scss"
import ParticleBackground from '../particles'
import ScreenChange from '../loader'

const Work = () =>{
    
    
    return(
        <div className='work-container'>
            <ParticleBackground/>
            <div className='text-zone'>
            <div class="glitch" data-text="<Projects">
                <div>&lt;Projects</div>
                </div> 
                <div class="glow"><div>&lt;Projects</div>
                </div>
                

                </div>

                <div className="part-2">
                <div class="glitch" data-text="Coming Soon/>">
                <div>Coming Soon/&gt;</div>
                </div> 
                <div class="glow"><div>Coming Soon/&gt;</div>
                </div>
                </div>
                

        <ScreenChange/>
        </div>
    )
}


export default Work