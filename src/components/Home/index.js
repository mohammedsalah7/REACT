import React, { Component } from 'react';
import { HomeSection ,Homeinformation,Hometitle,HomeInfo,HomeDesc,Span} from'./style.js';


class  Home extends Component {
  render(){
    return (
      <div className="App">
          <HomeSection>
            <div className="container">
                <Homeinformation>
                    <Hometitle>Mohammed Salah</Hometitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Web Developer and Front-End Developer</Span>  creating modern 
                        and resposive designs to Web . Let us work together. Thank you. 
                    </HomeDesc>
                    {/* <HomeBtn >Let's Begin</HomeBtn> */}
                </Homeinformation>
            </div>
        </HomeSection>
        
      </div>
    );
  }
  }
 

export default Home;
