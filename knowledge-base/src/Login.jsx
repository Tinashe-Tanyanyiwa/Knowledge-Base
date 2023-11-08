import React, { useState } from 'react'
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
import axios from 'axios';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(true);
    // function handleSubmit (e){
    //     e.preventDefault();
    //     axios
    //       .post("http://localhost:8800/user/login", { username, password })
    //       .then((res) => {
    //         console.log(res);
    //         navigate("/home"); // Navigate to /home after successful form submission
    //       })
    //       .catch((err) => {console.log(err)}
    //       );
    //   }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username.trim() === "" || password.trim() === "") {
          // Input is empty
          alert("Enter all your information!");
          return;
        }
      
        // Input is not empty
        axios
            .post("http://localhost:8800/user/login", { username, password })
            .then((res) => {
                console.log(res);

                if (res.data === "Login Successful") {
                    console.log("Administrator");
                    navigate("/home");
                } else if (res.data === "Not Administrator") {
                    console.log("Not administrator");
                    navigate("/blogs");
                } else {
                console.log("Not working");
                alert("Enter correct details");
                return;
                }
            })
            .catch((err) => {
                console.log(err);
                navigate("/");
                // Handle the error here, such as displaying an error message to the user
            });
        };
  

    return (
        <div>
        <div className="login">
        <Container className='myContainer'>
            <Row className=' myRow'>
                <Col  sm={12} lg = {6} className=' gap-2  myCol'>
                     <Form className="form" onSubmit={handleSubmit}  >
                     <img src={Logo} className='d-flex' height={120} width={auto} alt="LogoYe" />
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="text" placeholder="Username" 
                            onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className=" centero" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                className='inputLogin'
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Password"
                                onChange={e => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {/* <Form.Text className='quitText mt-3' id="passwordHelpBlock" muted>
                            Your password must be 8-20 characters long, contain letters and numbers,
                            and must not contain spaces, special characters, or emoji.
                        </Form.Text> */}
                        <br />
                        <Row className='rowButton'>
                       <Button variant="primary" type='submit' className='buttonLogin'>Login</Button>{' '}
                        </Row>
                        <br />
                        <p className='txtcenter'>
                        No account yet? <Link to='/signup' className=''>Signup </Link>
                     </p>
                    </Form>
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