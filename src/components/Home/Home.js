import React, { Component } from 'react';
import './Home.css';
export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(<div id="home">
    <div id="photo"><img src="./skillpill.png"/></div>
    <div id="bIntro">SkillPill is a name associated with a team of software developers who are always ready to take that pill(opportunity) of upgrading their skill. 
</div>
    </div>)
  }
}
