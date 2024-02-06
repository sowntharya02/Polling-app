import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './Login';
import Main from './Main';
import CreatePollPage from './Poll';
import SignupPage from './Signup';
export default class Routing extends Component {
  render() {
    return (
      <div>
        <Router>
            <Routes>
                
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/signup' element={<SignupPage/>}/>
                <Route path='/poll' element={<CreatePollPage/>}/>
                <Route path='/main' element={<Main/>}/>
            </Routes>
        </Router>


      </div>
    )
  }
}