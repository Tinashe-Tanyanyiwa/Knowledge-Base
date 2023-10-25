import logo from './logo.svg';
import './App.css';
import React from 'react';
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Footer from './Footer';
import Blogs from './Blogs';
import Landing from './Landing';
import AddUser from './AddUser';
import Add from './Add';
import Website from './Website';
import Article from './Article';
import Update from './Update';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/home" element={<Website/>}/>   
          <Route path="/add" element={<Add/>}/> 
          <Route path="/article/:articlesId" element={<Article/>}/>  
          <Route path="/addUser" element={<AddUser/>}/>    
          <Route path="/update" element={<Update/>}/>    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
