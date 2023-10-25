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

//   import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Add() {
  const [articles, setArticles] = useState({
    articlesTitle : "" ,
    articlesImageUrl : "" ,
    articlesBriefDescription : "",
    articlesBody : ""
});

const [articlesTitle,setArticlesTitle] = useState("");
const [articlesImageUrl,setArticlesImageUrl] = useState("");
const [articlesBriefDescription,setArticlesBriefDescription] = useState("");
const [articlesBody,setArticlesBody] = useState("");

    const navigate = useNavigate()

 
    const handleClick = async e =>{
        e.preventDefault()
        if ((articlesTitle.trim() === '')  || (articlesImageUrl.trim() === '') || (articlesBriefDescription.trim() === '') || (articlesBody.trim() === '')) {
            // Input is empty
            alert('Fill in all Input values!');
            return;
        }

        // Input is not empty
        try{
            await axios.post("http://localhost:8800/articles",articles)
            navigate("/home")
          }catch(err){
            console.log(err)
          }
      
    }
//    CLEAR INPUTS
const clearClick = () => {
    // 👇️ clear input value
    setArticlesTitle('');
    setArticlesImageUrl('');
    setArticlesBriefDescription('');
    setArticlesBody('');
  };
 
// CHECKING  IF ALL INPUTS HAVE BEEN ENTERED
  const handleChangeTitle = (e) =>{
    setArticles((prev) => ({...prev, [e.target.name]: e.target.value}));
    setArticlesTitle(e.target.value);
  }
  const handleChangeImageUrl = (e) =>{
    setArticles((prev) => ({...prev, [e.target.name]: e.target.value}));
    setArticlesImageUrl(e.target.value);
  }
  const handleChangeBriefDescription = (e) =>{
    setArticles((prev) => ({...prev, [e.target.name]: e.target.value}));
    setArticlesBriefDescription(e.target.value);
  }
  const handleChangeBody = (e) =>{
    setArticles((prev) => ({...prev, [e.target.name]: e.target.value}));
    setArticlesBody(e.target.value);
  }

  console.log(articles)


  return (
    <div className="Add pad">
    <Container>
        <Row className="d-flex justify-content-center mt-5">
            <Form className='transDisplay eighty'>
            <h2 className='white mb-4'><Link to = "/home" className="text-decoration-none white boldi">Blogs   </Link> <span><FontAwesomeIcon icon={faAnglesRight} /></span>  <span>Add New Article</span></h2>
            <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
                <Col sm="6">
                    <Form.Label className='white'>Title</Form.Label>
                    <Form.Control type="text" placeholder="" value={articlesTitle} onChange={handleChangeTitle} name='articlesTitle'/>
                </Col>
                <Col sm="6">
                    <Form.Label className='white'>Image Url</Form.Label>
                    <Form.Control type="text" placeholder="./Images/name.jpg" value={articlesImageUrl} onChange={handleChangeImageUrl} name='articlesImageUrl'/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Brief Description</Form.Label>
                <Form.Control as="textarea" rows={2} value={articlesBriefDescription} onChange={handleChangeBriefDescription} name='articlesBriefDescription'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article</Form.Label>
                <Form.Control as="textarea" value={articlesBody} rows={6} onChange={handleChangeBody} name='articlesBody'/>
            </Form.Group>
            <Button variant="primary" onClick={handleClick} className='pr-3'  active>
                Add Article
            </Button>{' '}
            <Button type="reset" onClick={clearClick} variant="outline-light"  >
                Clear
            </Button>
            </Form>
            
        </Row>
    </Container>
    </div>
  )
}
