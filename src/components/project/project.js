import React from 'react';
import { Component } from 'react';
import './project.css';

export default class Project extends Component{
    render(){
        var technologies=[],i;
        for(i=0;i<this.props.technologies.length;i++){
            technologies.push(<li>{this.props.technologies[i]}</li>);
        }
        return(<div id="project">
        <div id="back" onClick={this.props.back}>
        <div id="backsymbol">&larr;</div>
        Back</div>
        <div class="heading">{this.props.head}</div>
            <div><b className="head">Problem:</b>{this.props.problem}</div>
            <div>
                <div className="head"><b>Technologies Used:-</b></div>
                <div className="fields">
                    <ul>{technologies}</ul>
                </div>
            </div>
            <div><b className="head"><a href={this.props.live}>Live Demo</a>&nbsp;<a href={this.props.gitHub}>View on GitHub</a></b></div>
            <div>
                <div className="head"><b>History</b></div>
                <div className="fields">{this.props.history}</div>
            </div>
        </div>);
    }
}
