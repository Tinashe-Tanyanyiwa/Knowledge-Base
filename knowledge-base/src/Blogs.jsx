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
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

export default function Blogs() {
  const [lgShow, setLgShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const [articlesTitle, setArticlesTitle] = useState("")
  const [articlesBriefDescription, setArticlesBriefDescription] = useState("")
  const [searchedArticles, setSearchedArticles] = useState([])
  // MODAL ON DELETE
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(()=>{
    const fetchAllArticles = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/articles")
        setArticles(res.data);

      }catch(err){
        console.log(err)
      }
    }
    fetchAllArticles()
  },[])

  // MODAL
  const openModal = (e) =>  {
    e.preventDefault()
    setLgShow(true);
  }

  useEffect(() => {
    
  }, []);


  // DELETE
  const handleDelete = async (articlesId) =>{
    try{
      await axios.delete("http://localhost:8800/articles/" + articlesId)
      window.location.reload()
    }catch(err){
      console.log(err)
    }
  }

  //SEARCH TABLE USER
  useEffect(()=>{
    const fetchSelected = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/articles/search", {articlesTitle})
        setSearchedArticles(res.data);

      }catch(err){
        console.log(err)
      }
    }
    fetchSelected()
  },[])

  return (
    <div className="Blogs pad">
    <Container>
    <Row className="d-flex justify-content-center">
    <h2 className='black d-flex justify-content-center pb-3' lg={12}>Blog Category</h2>
    {/* <hr className='black d-flex justify-content-center' style={{ width: '20%', color: '#4169E1',backgroundColor:'#4169E1' }} /> */}
    <Nav variant="tabs" defaultActiveKey="/home" className="justify-content-center pb-3">
      <Nav.Item>
          <Nav.Link href="/home">Add</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Synology</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" >
            Palladium
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
    </Row>
  <Row className="d-flex justify-content-center">

    {articles.map((articles) => (
      
      <Col key={articles.articlesId} xs={12} md={6} lg={4} className="pad d-flex justify-content-center">
        {/* MODAL VIEW*/}
        <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">{articles.articlesTitle}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{articles.articlesBody}</Modal.Body>
            </Modal>
        <Card style={{ width: '22rem', padding: '10px' }}>
          {articles.articlesImageUrl && <Card.Img variant="top" src={articles.articlesImageUrl} />}
          <Card.Body>
            <Card.Title>{articles.articlesTitle}</Card.Title>
            <Card.Text>{articles.articlesBriefDescription + '...'}</Card.Text>
            <Card.Text>
              <a href="" target="_self">
                <Link to={`/article/${articles.articlesId}`}>
                  <FontAwesomeIcon  icon={faAnglesRight} />
                </Link>
              </a>
              <Button className='ml-7' onClick={handleShow} style={{marginLeft: '7px' }} variant="outline-danger">Delete</Button>{' '}
              <Link to={`/update/${articles.articlesId}`}><Button variant="outline-secondary">Update</Button>{' '}</Link>
            </Card.Text>
            
            {/* MODAL ON DELETE */}
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={() =>handleDelete(articles.articlesId) } variant="danger">Delete</Button>{' '}
        </Modal.Footer>
      </Modal>
          </Card.Body>
        </Card>
        
      </Col>
    ))}
  </Row>
</Container>

    </div>
  )
}
