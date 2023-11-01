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
import { useState } from 'react';
// import axios from 'axios';
import {useEffect} from 'react';
import axios from 'axios';
// import Nav from 'react-bootstrap/Nav';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
  } from "react-router-dom";

export default function Update() {
    const [articles, setArticles] = useState({
        articlesTitle : "" ,
        articlesImageUrl : "" ,
        articlesBriefDescription : "",
        articlesBody : ""
    });

    const navigate = useNavigate()

    const [articlesTitle,setArticlesTitle] = useState("");
    const [articlesImageUrl,setArticlesImageUrl] = useState("");
    const [articlesBriefDescription,setArticlesBriefDescription] = useState("");
    const [articlesBody,setArticlesBody] = useState("");

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

    const location = useLocation()
    const articlesId = location.pathname.split("/")[2]

    console.log(location.pathname.split("/")[2])
    const handleClick = async e =>{
        e.preventDefault()
        if ((articlesTitle.trim() === '')  || (articlesImageUrl.trim() === '') || (articlesBriefDescription.trim() === '') || (articlesBody.trim() === '')) {
            // Input is empty
            alert('Fill in all Input values!');
            return;
        }

        // Input is not empty
        try{
            await axios.put("http://localhost:8800/articles/" + articlesId, articles)
            navigate("/home")
          }catch(err){
            console.log(err)
          }
      
    }
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
                    <Form.Control type="text" placeholder=""   value={articlesTitle} onChange={handleChangeTitle} name='articlesTitle'/>
                </Col>
                <Col sm="6">
                    <Form.Label className='white'>Image Url</Form.Label>
                    <Form.Control type="text" placeholder="./Images/name.jpg"   value={articlesImageUrl} onChange={handleChangeImageUrl} name='articlesImageUrl'/>
                </Col>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Brief Description</Form.Label>
                <Form.Control as="textarea" rows={2}    value={articlesBriefDescription} onChange={handleChangeBriefDescription} name='articlesBriefDescription'/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Article</Form.Label>
                <Form.Control as="textarea"  rows={6}  value={articlesBody}  onChange={handleChangeBody} name='articlesBody'/>
            </Form.Group>
            <Button variant="primary" onClick={handleClick}  className='pr-3'  active>
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
