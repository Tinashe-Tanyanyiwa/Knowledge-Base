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
import axios from 'axios';
import { useState } from 'react';  
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";

export default function Signup() {
  const [user, setUser] = useState({
    username : "" ,
    password : "" ,
    email : "",
    contact : "",
    role : "General User"
});

const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    // const [role,setRole] = useState("");

    const navigate = useNavigate()

    const handleClick = async e =>{
      e.preventDefault()
      if ((username.trim() === '')  || (password.trim() === '') || (email.trim() === '') || (contact.trim() === '') ) {
          // Input is empty
          alert('Enter all your information!');
          return;
      }
      const rgExp = /^[a-zA-Z0-9._]+@[a-z]+\.[a-z]{2,6}$/;
            if (rgExp.test(email)) {
              console.log("The Email address is valid")
            }else {
              alert('Enter your email in this format:  \n email@address.com');
              return;
            }
    
      // Input is not empty
      try{
          await axios.post("http://localhost:8800/user/signup",user)
          navigate("/")
        }catch(err){
          console.log(err)
        }
    
  }

   // CHECKING  IF ALL INPUTS HAVE BEEN ENTERED
   const handleChangeName= (e) =>{
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    setUsername(e.target.value);
  }
  const handleChangePassword = (e) =>{
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    setPassword(e.target.value);
  }
  const handleChangeEmail = (e) =>{
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    setEmail(e.target.value);
  }
  const handleChangeContact = (e) =>{
    setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    setContact(e.target.value);
  }
  // const handleChangeRole = (e) =>{
  //   setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
  //   // setRole(e.target.value);
  // }

  console.log(user)

  return (
    <div className='signup'>
      <Container className='myContainer'>
            <Row className='  '>
                <Col   md={{ span: 6, offset: 3 }} className='myRow gap-2  myCol'>
                     {/* <Form> */}
                     <img src={Logo} className='d-flex' height={120} width={auto} alt="LogoYe" />
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="text" placeholder="Username" onChange={handleChangeName} value={username}  name='username' />
                        </Form.Group>
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                className='inputLogin'
                                type="password"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                                placeholder="Password"
                                onChange={handleChangePassword}
                                value={password}
                                name='password'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="email" placeholder="example@gmail.com" onChange={handleChangeEmail} value={email}  name='email' />
                        </Form.Group>
                        <Form.Group className="mb-3 centero" controlId="exampleForm.ControlInput1">
                            <Form.Control className='inputLogin' type="input" placeholder="Number: 07********" onChange={handleChangeContact} value={contact}  name='contact' />
                        </Form.Group>
                        <br />
                        <Row className='rowButton'>
                        <Button variant="primary" className='buttonLogin' type="submit" onClick={handleClick}>Sign Up</Button>{' '}
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
