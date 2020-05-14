import React, { Component } from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Contact from './components/Contact';
import Navba from './components/navba';
import INdex from './components/index';

class  App extends Component {
  render(){
    return (
      <div >
        <BrowserRouter>
        <Navba/>
        <Route exact path= '/' component={INdex} />
        <Route path= '/contact' component={Contact} />

        </BrowserRouter>
       
         
          
         
                </div>
    );
  }
  }
 

export default App;
