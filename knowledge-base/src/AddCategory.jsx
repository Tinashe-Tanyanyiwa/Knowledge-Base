import React from 'react'
import './custom.css'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import synologyDevice from './Images/synologyDevice.jpg'
import kasperSky from './Images/kasperSky.jpg'
import palladium from './Images/palladium.jpg'
import hardware from './Images/hardware.jpg'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
  } from "react-router-dom";


export default function AddCategory() {

    const handleChangeCategoryname = (e) =>{
        setCategory((prev) => ({...prev, [e.target.name]: e.target.value}));
        setCategoryname(e.target.value);
      }

      const handleChangeCategorydescription = (e) =>{
        setCategory((prev) => ({...prev, [e.target.name]: e.target.value}));
        setCategorydescription(e.target.value);
      }

    const navigate = useNavigate()
    const [category, setCategory] = useState({
        categoryname : "" ,
        categorydescription : ""
    });
    
      const [categoryname,setCategoryname] = useState("");
      const [categorydescription,setCategorydescription] = useState("");
     
    
    const handleClick = async e =>{
        e.preventDefault()
        if ((categoryname.trim() === '')  || (categorydescription.trim() === '') ) {
            // Input is empty
            alert('Fill in all Input values!');
            return;
        }

        // Input is not empty
        try{
            await axios.post("http://localhost:8800/category",category)
            navigate("/home")
          }catch(err){
            console.log(err)
          }
      
    }
    console.log(category)
  return (
    <div className='addCategory'>
      <div className="Add pad">
    <Container>
        <Row className="d-flex justify-content-center mt-5">
            <Form className='transDisplay eighty category'>
            <h2 className='white mb-4'><Link to = "/home" className="text-decoration-none white boldi">Blogs   </Link> <span><FontAwesomeIcon icon={faAnglesRight} /></span>  <span>Add New Category</span></h2>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Col sm="12">
                    <Form.Label className='white'>Category Name</Form.Label>
                    <Form.Control type="text" placeholder="" value={categoryname} onChange={handleChangeCategoryname} name='categoryname'/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Brief Description</Form.Label>
                <Form.Control as="textarea" rows={2} value={categorydescription} onChange={handleChangeCategorydescription} name='categorydescription'/>
            </Form.Group>
            
            <Button variant="primary" onClick={handleClick} className='pr-3'  active>
                Add Category 
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
