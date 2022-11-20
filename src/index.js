import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes, Router} from 'react-router-dom';

// CSS

import './index.css';


// Page

import Home from './page/home.js';
import Login from './page/login.js';
import Project from './page/project.js';
import Submission from './page/submission.js';
import Mypage from './page/mypage.js';
import Signup from './page/signup.js';
import AddProject from './page/addproject.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} exact/>
        <Route path="/login" element = {<Login/>} />
        <Route path="/project" element = {<Project/>} />
        <Route path="/submission" element = {<Submission/>} />
        <Route path="/mypage" element = {<Mypage/>} />
        <Route path="/signup" element = {<Signup/>} />
        <Route path="/addproject" element = {<AddProject/>} />
      </Routes>
    </BrowserRouter>,
    root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
