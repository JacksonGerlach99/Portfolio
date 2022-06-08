import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import JG from '../../assets/images/JG.png'
import Jackson from '../../assets/images/JacksonG.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome,faUser, faEnvelope, faToolbox,faListCheck} from '@fortawesome/free-solid-svg-icons'
import {faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'




const Sidebar = () => (

    <div className='nav-bar'>
        <Link className='tag' to="/">
        <img className ='logo' src = {JG} alt = 'tag'/>
        <img className ="nameTag" src = {Jackson} alt ='name'/>
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "about-link" to="/About">
            <FontAwesomeIcon icon ={faUser}  />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "skill-link" to="/skill">
            <FontAwesomeIcon icon ={faToolbox}  />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "project-link" to="/projects">
            <FontAwesomeIcon icon ={faListCheck}  />
        </NavLink>
        <NavLink exact = "true" activeclassname = "active" className = "contact-link" to="/contact">
            <FontAwesomeIcon icon ={faEnvelope}  />
        </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href ="https://github.com/jacksongerlach99">
                    <FontAwesomeIcon icon={ faGithub}/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href ="https://www.linkedin.com/in/jackson-gerlach-53b83623a/">
                    <FontAwesomeIcon icon={ faLinkedinIn}/>
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href ="https://twitter.com/JacksonGe99">
                    <FontAwesomeIcon icon={ faTwitter}/>
                </a>
            </li>

        </ul>
        
    </div>
)

export default Sidebar