import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import {useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default function Landing() {
  const [articlesTitle, setArticlesTitle] = useState("");
  // const [articlesBriefDescription, setArticlesBriefDescription] = useState("");
  // const [searchedArticles, setSearchedArticles] = useState([]);

    //SEARCH TABLE USER
    // useEffect(()=>{
      const fetchSelected = async ()=>{
        try{
          const res = await axios.get("http://localhost:8800/articles/search", {articlesTitle})
          setArticlesTitle(res.data);
  
        }catch(err){
          console.log(err)
        }
      }
    //   fetchSelected()
    // },[])
  
  return (
    <>
    <div>
      <div className="Home">
                <section id="home" className=''>
                
            <div className ="image home-info d-flex flex-column justify-content-center align-items-center">
            
            <Container className='row'>
              {/* <Row className='buttonRow'>
               <Button variant="secondary" className='logoutButton'>Log Out</Button>{' '}
             </Row> */}
                 <Row >
                    <Col>
                    
                    </Col>
                    <Col lg={{ span: 6, offset: 3 }}>
                {/* <h1 className ="my-4"></h1> */}
                <h2 className='black'>How can we help?</h2>
                <p className='black'>Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.</p>
                <InputGroup  >
                    <Form.Control placeholder="Search" onChange={e => setArticlesTitle(e.target.value)} aria-label="Dollar amount (with dot and two decimal places)" />
                    <Button className='search' variant="primary">Search</Button>{' '}
                </InputGroup>
                <div className="pt-3"> 
                <Link to='/add'><Button variant="outline-primary">Add Blog</Button>{' '}</Link>
                <Link to='/addUser'><Button variant="outline-success">Add User</Button>{' '}</Link>
                </div>
                {/* <button type="button"  className ="btn btn-outline-success mt-4 py-3 px-5 border-2 fw-bold rounded-pill">Contact Me</button> */}
                <div className='row'>
                  <div className='col-md-6'>
                  </div>
                </div>
                
                    </Col>
                </Row>
            </Container>
                
            </div>
            
        </section>

    </div>
    </div>
    </>
  )
}
