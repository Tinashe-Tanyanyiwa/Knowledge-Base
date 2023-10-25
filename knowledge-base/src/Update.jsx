import React from 'react'
import './custom.css'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
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

export default function Update() {
  return (
    <div>
          <div className='update pad'>
          <Container>
        <Row className="d-flex justify-content-center mt-5">
        <Form className='transDisplay eighty'>
            <h2 className='white mb-4'><Link to = "/home" className="text-decoration-none white boldi">Blogs   </Link> <span><FontAwesomeIcon icon={faAnglesRight} /></span>  <span>Update Article</span></h2>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Col sm="6">
                    <Form.Label className='white'>Title</Form.Label>
                    <Form.Control type="text" placeholder=""   name='articlesTitle'/>
                </Col>
                <Col sm="6">
                    <Form.Label className='white'>Image Url</Form.Label>
                    <Form.Control type="text" placeholder="./Images/name.jpg"   name='articlesImageUrl'/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Brief Description</Form.Label>
                <Form.Control as="textarea" rows={2}   name='articlesBriefDescription'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article</Form.Label>
                <Form.Control as="textarea"  rows={6}  name='articlesBody'/>
            </Form.Group>
            <Button variant="primary"  className='pr-3'  active>
                Update Article
            </Button>{' '}
            <Button type="reset"  variant="outline-light"  >
                Clear
            </Button>
            </Form>
        </Row>
    </Container>
    </div>
    </div>
  )
}
