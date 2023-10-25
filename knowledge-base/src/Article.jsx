import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import hardware from './Images/hardware.jpg'
import './custom.css'
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";
  import Footer from './Footer';

const Article = () => {
  return (
    <div className='hunid'>
        <div className="article">
        <Container fluid="md ml-5 mr-5 articleContainer ">
            <Row className='articleRow centero'>
            <Col  className="d-flex centero">
                <h2 className='black mb-3'><Link to = "/home" className="text-decoration-none black boldi">Blogs   </Link> <span><FontAwesomeIcon icon={faAnglesRight} /></span> <span>Tanyay idhara</span></h2>
               
            </Col>
            </Row>
            <Row className='centero'>
              <Col className='centero'>
              <hr  className='mb-4'/>
              </Col>
            </Row>
            
            
            
            <Row className='centero'>
              <Col lg={8} className=''>
              <Image src={hardware} fluid  rounded/>
              </Col>
            </Row>
            <Row className='pt-4 centero'>
            <Col lg={8} className="d-flex justify-content-center">
                <p className='black'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius dapibus tortor, sed viverra lorem elementum tincidunt. Etiam tincidunt sollicitudin ipsum, dapibus eleifend elit ultricies pellentesque. Nullam vehicula velit non turpis condimentum sodales. Nunc non velit tristique, convallis eros vitae, dapibus purus. Donec sodales purus sed lacus pulvinar, a posuere libero facilisis. Nunc consectetur dignissim vehicula. Vivamus tristique mi lobortis augue luctus, blandit viverra orci commodo. Integer orci nunc, luctus et est ac, dictum aliquam nisi. Aenean risus velit, placerat id ante in, consequat mattis mauris. Ut varius diam tempor dapibus pretium. Nunc ornare rhoncus purus. Fusce et tortor pretium, aliquet leo feugiat, sollicitudin sem. Nunc tincidunt quam id varius rutrum. Aenean facilisis quam vulputate vulputate vestibulum. Proin ac massa purus.
                </p>
            </Col>
            </Row>
        </Container>
        </div>
  {/* <Footer/> */}
    </div>
  )
}

export default Article
