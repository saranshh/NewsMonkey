import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  pageSize=9;
  apiKey = process.env.REACT_APP_NEWS_API

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

  render() {
    return ( 
      <div>
         <BrowserRouter>
        <Navbar />
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress} 
      />
        <Routes>
          <Route path="/" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route path="/business" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="business" pageSize={this.pageSize} country="in" category="Business"/>}></Route>
          <Route path="/entertainment" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="entertainment" pageSize={this.pageSize} country="in" category="Entertainment"/>}></Route>
          <Route path="/general" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="General"/>}></Route>
          <Route path="/health" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="health" pageSize={this.pageSize} country="in" category="Health"/>}></Route>
          <Route path="/science" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="science" pageSize={this.pageSize} country="in" category="Science"/>}></Route>
          <Route path="/sports" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="sports" pageSize={this.pageSize} country="in" category="Sports"/>}></Route>
          <Route path="/technology" element={ <News setProgress={this.setProgress} apiKey ={this.apiKey} key="technology" pageSize={this.pageSize} country="in" category="Technology"/>}></Route>
        </Routes>
       
        </BrowserRouter>
      </div>
    )
  }
}

