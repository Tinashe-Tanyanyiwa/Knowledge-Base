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
import Blogs from './Blogs';

export default function Landing() {
  const [articlesTitle, setArticlesTitle] = useState("");
  // const [articlesBriefDescription, setArticlesBriefDescription] = useState("");
  const [search, setSearch] = useState('');

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
   <p>Hey</p>
    </>
  )
}
