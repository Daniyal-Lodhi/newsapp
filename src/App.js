import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Homepage from './components/Homepage';

export default class App extends Component {
  apikey =  process.env.REACT_APP_API_KEY
  state = {
    progress : 0 
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  
  render() {
    return (
      <div>
        
        <Router>
        <Navbar/>
        <LoadingBar
        height={3}
        color= 'yellow'
        progress={this.state.progress}
      />
        <Routes>
          <Route exact path='/' element={<Homepage/>}  />
        <Route exact path="/general" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey}  key="general" country="us" category="general" pagesize={6} />
          } />
           <Route  exact path="/business" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey} key="business" country="us" category="business" pagesize={6} />
          } />
         <Route exact path="/entertainment" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey} key="entertainment" country="us" category="entertainment" pagesize={6} />
          } />
           <Route exact path="/health" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey} key="health" country="us" category="general" pagesize={6} />
          } />
          <Route exact strict path="/science" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey} key="science"country="us" category="science" pagesize={6} />
          } />
          <Route exact path="/sports" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey} key="sports" country="us" category="general" pagesize={6} />
          } />
          <Route exact path="/technology" element={
            <News setProgress ={this.setProgress} apikey = {this.apikey} key="technology" country="us" category="general" pagesize={6} />
          } />
          
        </Routes>
        </Router>
      </div>
    )
  }
}
