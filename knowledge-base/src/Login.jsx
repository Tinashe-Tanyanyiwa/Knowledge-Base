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

export default function Login() {
    return (
        <div>
        <div className="login">
        <Container className='myContainer'>
            <Row className=' myRow'>
                <Col  sm={12} lg = {6} className=' gap-2  myCol'>
                     {/* <Form> */}
                     <img src={Logo} className='d-flex' height={120} width={auto} alt="LogoYe" />
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="text" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className=" centero" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                className='inputLogin'
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Password"
                            />
                        </Form.Group>
                        {/* <Form.Text className='quitText mt-3' id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text> */}
                        <br />
                        <Row className='rowButton'>
                        <Link to='/home' className='centero'><Button variant="primary" className='buttonLogin'>Login</Button>{' '}</Link>
                        </Row>
                        <br />
                        <p className='txtcenter'>
                        No account yet? <Link to='/signup' className=''>Signup </Link>
                     </p>
                    {/* </Form> */}
                </Col>
                <Col sm={12} lg = {6} className='green  myCol '>
                    
                    {/* <h2 className='txtcenter white wel'> 
                        Welcome back!
                    </h2> */}
                    {/* <br /> */}
                   
                    {/* <p className='txtcenter white'>
                        We are happy to have you here, it's great to see you again. We hope you had a safe and enjoyable time away.
                    </p> */}
                    {/* <br /> */}
                    
                </Col>
            </Row>
         </Container>
        </div>
        </div>
        )
    }