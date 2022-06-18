import Navbar from 'react-bootstrap/Navbar'
import "./index.scss"
import { Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {faHome,faUser, faEnvelope, faToolbox,faListCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from "react";




const Tbar = () =>{
    const [expand, updateExpanded] = useState(false);
  

  
    return (
        <div className='Tbar-page'>
            <Navbar bg="black" variant ={"dark"} expand="lg" fixed='top'>
            <Container >
                <Navbar.Brand href="#contact">
                    <Link className='house' activeclassname="active" to="/">
                        < FontAwesomeIcon icon={faHome} /> Home
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                    }}
                    >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="about-me">
                        <Link className='tag' activeclassname="active" to="/About">
                            <FontAwesomeIcon icon ={faUser}  className= "pic"/>
                        About Me 
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="skill-me">
                        <Link className='tag'  activeclassname="active" to="/skill">
                        <FontAwesomeIcon icon ={faToolbox}  />
                        Skills
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="/projects">
                        <Link className='tag' activeclassname="active" to="/projects">
                            <FontAwesomeIcon icon ={faListCheck}/>
                            Projects
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="/contact">
                        <Link className='tag' activeclassname="active" to="/contact">
                            <FontAwesomeIcon icon ={faEnvelope}  />
                            Contact
                        </Link>
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
export default Tbar