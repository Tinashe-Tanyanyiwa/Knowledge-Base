  import React from 'react'
  import Container from 'react-bootstrap/Container';
  import Row from 'react-bootstrap/Row';
  import Col from 'react-bootstrap/Col';
  import Image from 'react-bootstrap/Image';
  import './custom.css'
  import './main.css';
  import 'bootstrap/dist/css/bootstrap.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
  import '@fortawesome/fontawesome-svg-core/styles.css';
  import axios from 'axios';
  import {useEffect} from 'react';
  import { useState } from 'react';
  import {
      BrowserRouter,
      Routes,
      Route,
      Link,
      useNavigate,
      useLocation,
    } from "react-router-dom";
    import Footer from './Footer';

  const Article = () => {
    const [articles, setArticles] = useState([]);
  

    const location = useLocation()
      const articlesId = location.pathname.split("/")[2]
      const me = parseInt(location.pathname.split("/")[2])

    useEffect(()=>{
      const fetchAllArticles = async ()=>{
        try{
          const res = await axios.get("http://localhost:8800/articles/" + articlesId, articles)
          setArticles(res.data);

        }catch(err){
          console.log(err)
        }
      } 
      fetchAllArticles()
    },[articlesId])
console.log(typeof me)
console.log()
    return (
      <div className='hunid'>
          <div className="article">
          {articles.filter(articles => articles.articlesId === me).map((articles) => (
          <Container key={articles.articlesId} fluid="md ml-5 mr-5 articleContainer ">
              <Row  className='articleRow centero'>
              <Col  className="d-flex centero">
                  <h2 className='black mb-3'><Link to = "/home" className="text-decoration-none black boldi">Blogs   </Link> <span><FontAwesomeIcon icon={faAnglesRight} /></span> <span>{articles.articlesTitle}</span></h2>
                
              </Col>
              </Row>
              <Row className='centero'>
                <Col className='centero'>
                <hr  className='mb-4'/>
                </Col>
              </Row>
              
              
              
              <Row className='centero'>
                {/* <Col lg={8} className=''>
                   <Image  src={articles.articlesImageUrl} fluid  rounded/>
                </Col> */}
              </Row>
              <Row className='pt-4 centero'>
              <Col lg={8} className="d-flex justify-content-center">
                  <p className='black'>
                    {articles.articlesBody}
                  </p>
              </Col>
              </Row>
          </Container>
            ))}
          </div>
    {/* <Footer/> */}
      </div>
    )
  }

  export default Article
