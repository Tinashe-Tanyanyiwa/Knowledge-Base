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
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import axios from 'axios';
import { useState } from 'react';   
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";

export default function AddUser() {
    const [user, setUser] = useState({
        username : "" ,
        password : "" ,
        email : "",
        contact : "",
        role : ""
    });
    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const [contact,setContact] = useState("");
    const [role,setRole] = useState("");
    
        const navigate = useNavigate()
    
     
        const handleClick = async e =>{
            e.preventDefault()
            if ((username.trim() === '')  || (password.trim() === '') || (email.trim() === '') || (contact.trim() === '')) {
                // Input is empty
                alert('Fill in all Input values!');
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
    //    CLEAR INPUTS
    const clearClick = () => {
        // 👇️ clear input value
        username('');
        password('');
        email('');
        contact('');
        role('');
      };
   
    
     
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
      const handleChangeRole = (e) =>{
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
        setRole(e.target.value);
      }
    
      console.log(user)
    
  return (
    <div className='addUser pad'>
          <Container className=''>
        <Row className="d-flex justify-content-center mt-5 mb-5">
        <Form className='transDisplay eighty' >
            <h2 className='white mb-4'><Link to = "/home" className="text-decoration-none white boldi">Blogs   </Link> <span><FontAwesomeIcon icon={faAnglesRight} /></span>  <span>Add New User</span></h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Username</Form.Label>
                <Form.Control aria-describedby="inputGroup-sizing-default" type="text" rows={2} onChange={handleChangeName} value={username}  name='username'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control aria-describedby="inputGroup-sizing-default" rows={2} onChange={handleChangePassword} value={password}  name='password'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>E-mail</Form.Label>
                <Form.Control aria-describedby="inputGroup-sizing-default" type="email" rows={2} onChange={handleChangeEmail} value={email}  name='email'/>
            </Form.Group>
            <Form.Group as={Row} className="mb-4" controlId="exampleForm.ControlInput1">
                <Col sm="6">
                    <Form.Label className='white'>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="" onChange={handleChangeContact} value={contact}  name='contact'/>
                </Col>
                    <Col sm="6" className=''>
                    <Form.Label className='white'>Role</Form.Label>
                    <Form.Control type="text" placeholder="Administrator or General User" onChange={handleChangeRole} value={role}  name='role'/>
                    {/* <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="User Role"
                    >
                    <Form.Select aria-label="Floating label select example" onChange={handleChangeRole}   >
                        <option value="role" name='role'>Regular User</option>
                        <option value="role" name='role'>Administrator</option>
                    </Form.Select>
                    </FloatingLabel> */}
                    {/* <Form.Label className='white'>Role</Form.Label>
                    <Form.Control type="radio" placeholder="" onChange={handleChangeRole} value={role} name='role'/>
                    <Form.Label className='white'>Role</Form.Label>
                    <Form.Control type="radio" placeholder="" onChange={handleChangeRole} value={role} name='role'/> */}
                </Col>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleClick}  className='pr-3'  active>
                Add User
            </Button>{' '}
            <Button type="reset"   variant="outline-light"  >
                Blogs
            </Button>
            </Form>
        </Row>
    </Container>
    </div>
  )
}
