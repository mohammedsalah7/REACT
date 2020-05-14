import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import  {Navrbarsection ,Logo,Logotext,ULlist,ListItem,Ancor} from './style.js';

class  Navba extends Component {
  render(){
    return (
      
        <Navrbarsection>
            
            <div  className="container">
                
                <Logo>
                    <Logotext>  <img src="./images/logo2.PNG" alt=""/> </Logotext>
                </Logo>
                
                {/* <input type="checkbox" id="nav">
                <label for="nav"></label> */}
                
                <ULlist >
                    <ListItem><Link  className='ancor' to='/'>Home</Link></ListItem>
                    <ListItem><Ancor href="#works">Work</Ancor></ListItem>
                    <ListItem><Ancor href="#">Resume</Ancor></ListItem>
                    <ListItem><Ancor href="#">About</Ancor></ListItem>
                    <ListItem><Link  className='ancor' to='/contact'>Contact</Link></ListItem>
                </ULlist>
                
            </div>
            
        </Navrbarsection>
    );
  }
  }
 

export default Navba;
