import React, { Component } from 'react';
import './Home.css';
import CardComponent from '../componentlink/componentlink';
export default class Home extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
      <div id="home">
    <div id="photo"><img src="./skillpill.png"/></div>
    <div id="bIntro">SkillPill is a name associated with a team of software developers who are always ready to take that pill(opportunity) of upgrading their skill.
</div>
  </div>
    <CardComponent title = {"About Us"} content = {"It all started on 17 June when our mentor Aashish Sir invited us to work on a program. While developing the solution we encountered a lot of problems and in the process of solving those problems we were continuously upgrading ourselves"} onClick = {this.props.aboutus}/>
    <CardComponent title = {"Works"} content = {"contact"} onClick = {this.props.works}/>

    </div>)
  }
}
