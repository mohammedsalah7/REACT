import React, { Component } from 'react';
import axios from "axios";
import {Works,WorkTitle ,Span, Icon,PartTitle,Line,PartDesc ,Part} from './style.js';

class  Work extends Component {

state  ={
    works :[] 
}

componentDidMount() {
    axios.get("js/data.json").then( res =>{this.setState({works:res.data.works})})

}

  render(){

    const {works} = this.state ;
    const workslist = works.map( (workitem) => {

    return (
        <Part key={workitem.id}>
            <Icon>{workitem.icon_name}</Icon>
    <PartTitle>{workitem.title}</PartTitle>
            <Line/>
            <PartDesc>
               {workitem.body}
            </PartDesc>
        </Part>
    )

    })
    return (
      <Works id ="works">
             
            <div className="container">
                <WorkTitle><Span>My Work</Span> </WorkTitle>
                {workslist}
                
                </div>
        
      </Works>
    );
  }
  }
 

export default Work;
