import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Landing';
import Blogs from './Blogs';
import reportWebVitals from './reportWebVitals';
import Footer from './Footer'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";


const Website = () => {
  return (
    <div>
    <Landing/>
    <Blogs/>
    <Footer/>
    </div>
  )
}

export default Website
