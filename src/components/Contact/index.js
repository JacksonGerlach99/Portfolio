import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import emailjs from '@emailjs/browser'
import ScreenChange from '../loader'
import { Container, Row, Col } from 'react-grid-system'
import {faLinkedinIn, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


const Contact = () =>{
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
  
    useEffect(() => {
        const timer = setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
      }, [])


      const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_vqdrmjk','template_7ej3qfc',form.current,'CUpsezlEgDLHUDzXI')
          .then(
            () => {
              alert('Message sent!')
             
            },
            () => {
              alert('Failed to send, please try again')
            }
          )
      }



    
    return(
        <>
        <Container className="contact-container" fluid>
        
            <Row align="center" justify="center" direction="row" className='row'>
            <Col xl = {5} md={11} xs={11} offset={{ md: 1 }}>
            <div className="text-zone">
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['<','C','o','n', 't', 'a', 'c', 't', ' '," ", 'M', 'e','/','>']}
                idx={15}/>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input type='text' name = 'name' placeholder = "name" required/>
                            </li>
                            <li className="half">
                                <input type='email' name = 'email' placeholder = "email" required/>
                            </li>
                            <li>
                                <input placeholder="Subject" type ="text" name = "subject" required />
                            </li>

                            <li>
                                <textarea placeholder="Message" name="message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND"/>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <Col className="links">
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

            </Col>

            </Col>

            <Col xl = {6} md={12} xs={11}>
            <div className="map">
                <MapContainer center={[48.4284, -123.3656]} zoom={13}>
                    <TileLayer url ="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                </MapContainer>
            </div>
            </Col>

        
            <ScreenChange/>
            </Row>





        </Container>
        
        </>
    )
}

export default Contact