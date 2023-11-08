import React from 'react'
import './custom.css'
import './main.css'
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
import Footer from './Footer'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Landing from './Landing';

export default function HomeUser() {
  const [search, setSearch] = useState('');
  const [lgShow, setLgShow] = useState(false);
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState([])
  const [articlesTitle, setArticlesTitle] = useState("")
  const [categoryname,setCategoryname] = useState("")
  const [articlesBriefDescription, setArticlesBriefDescription] = useState("")
  const [searchedArticles, setSearchedArticles] = useState([])
  // MODAL ON DELETE
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

// GETTING ARTICLES
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

  // GETTING CATEGORIES
  useEffect(()=>{
    const fetchAllCategories = async ()=>{
      try{
        const res = await axios.get("http://localhost:8800/category")
        setCategory(res.data);

      }catch(err){
        console.log(err)
      }
    }
    fetchAllCategories()
  },[])

  // MODAL
  const openModal = (e) =>  {
    e.preventDefault()
    setLgShow(true);
  }

  useEffect(() => {
    
  }, []);




  //SEARCH TABLE ARTICLES
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
    <div className="blogme">
      {/* LANDING */}
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
                    <Form.Control placeholder="Search" onChange={(e) => setSearch(e.target.value)} aria-label="Dollar amount (with dot and two decimal places)" />
                    <a href="#blogs"><Button className='search' variant="primary">Search </Button>{' '}</a>
                </InputGroup>
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
    {/* LANDING */}
    <div className="Blogs pad" id='blogs'>
    <Container>
    <Row className="d-flex justify-content-center">
    <h2 className='black d-flex justify-content-center pb-3' lg={12}>Blog Category</h2>
      {/* MAPPING CATEGORIES */}
      <Nav  variant="tabs" defaultActiveKey="/home" className="justify-content-center pb-3">
      
    {category.map((category) => (
        <Nav.Item key={category.categoryid}>
          <Nav.Link eventKey="link-1">{category.categoryname}</Nav.Link>
        </Nav.Item> 
    ))}
    </Nav>
    </Row>
  <Row className="d-flex justify-content-center">
    


    {/* MAPPING ARTICLES */}
    {articles
    .filter((articles) => {
      const lowercaseSearch = search.toLowerCase();
      const lowercaseTitle = articles.articlesTitle.toLowerCase();
      
      return lowercaseSearch === '' 
        ? articles
        : lowercaseTitle.includes(lowercaseSearch);
    })
    .map((articles) => (
      
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
                <Link to={`/articles/${articles.articlesId}`}>
                  <FontAwesomeIcon  icon={faAnglesRight} />
                </Link>
              </a>
            </Card.Text>
            
          </Card.Body>
        </Card>
        
      </Col>
    ))}
  </Row>
</Container>

    </div>
    <Footer/>
    </div>
    
  )
}

