import React, { Component } from 'react';

import About from './../About';
import Footer from './../Footer';
import Home from './../Home';
import Profile from './../Profile';
import Work from './../Work';
import SocialMedia from './../SocialMedia';

class  INdex extends Component {
  render(){
    return (
      <div className="App">
          <Home/>
          <Work />
        
          <Profile/>
          <About/>
          <SocialMedia/>
          <Footer/>
          
         
                </div>
    );
  }
  }
 

export default INdex;
