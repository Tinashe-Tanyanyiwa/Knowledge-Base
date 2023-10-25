import React from 'react'
import './custom.css'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Logo from './Images/logo.svg'
import { auto } from '@popperjs/core';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom";

export default function Signup() {
  return (
    <div className='signup'>
      <Container className='myContainer'>
            <Row className='  '>
                <Col   md={{ span: 6, offset: 3 }} className='myRow gap-2  myCol'>
                     {/* <Form> */}
                     <img src={Logo} className='d-flex' height={120} width={auto} alt="LogoYe" />
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                className='inputLogin'
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Password"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="email" placeholder="example@gmail.com" />
                        </Form.Group>
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="input" placeholder="+263*********" />
                        </Form.Group>
                        <br />
                        <Row className='rowButton'>
                        <Link to='/home' className='centero'><Button variant="primary" className='buttonLogin'>Sign Up</Button>{' '}</Link>
                        </Row>
                        <br />
                        <p className='txtcenter'>
                       Already have an account? <Link to='/' className=''>Login </Link>
                     </p>
                    {/* </Form> */}
                </Col>
               
            </Row>
         </Container>
    </div>
  )
}
