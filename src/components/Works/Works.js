import React, { Component } from 'react';
import Project from '../project/project';
import './Works.css';

class Works extends Component {
    constructor(props) {
        super(props);
        this.state={
            home:true,
            baseLines:false,
            progress:false
        }
        this.home = this.home.bind(this);
        this.baselines = this.baselines.bind(this);
        this.progress = this.progress.bind(this);
    }
    home(){
        this.setState({
            home:true,
            baseLines:false,
            progress:false
        });
    }
    baselines(){
        this.setState({
            home:false,
            baseLines:true,
            progress:false
        });
    }
    progress(){
        this.setState({
            home:false,
            baseLines:false,
            progress:true
        });
    }
    render() {
        if(this.state.home)
        return (<div id="Work">
            <h1>Works</h1>
            <div className="content">SkillPill team is always working towards new ideas or solution which can help a group of people to accomplish certain tasks. In the process of continous development towards projects and learning continously in the process SkillPill team has developed some projects. Here are the competencies earned by them during the process and to support their competencies their projects are also shown. You can view their progress here.</div>
            <h2 className="comp">Competencies Earned:-</h2>
            <ul>
                <li>HTML,CSS & JS</li>
                <li>React</li>
                <li>AWS</li>
                <li>AWS CLI</li>
                <li>Java</li>
                <li>Python</li>
                <li>Google App Script</li>
                <li>Web Crawling</li>
                <li>Automated Testing in React</li>
                <li>Clean Coding</li>
                <li>GitHub</li>
                <li>Bootstrap</li>
                <li>Rest APIs</li>
                <li>JSON</li>
            </ul>
            <h2 className="comp">Projects:-</h2>
            <ul className = "hover">
                <li onClick={this.baselines}>BaseLines</li>
                <li onClick={this.progress}>Progress Tracker</li>
            </ul>
        </div>)
        else if(this.state.baseLines)
        return (<Project head="BaseLines" problem="To develop a user friendly interface to select 6 top qualities"
        technologies={["HTML","CSS","JavaScript","React","AWS","Bootstrap","Reactstrap"]} live="https://w2lbeliefs.s3.ap-south-1.amazonaws.com/SelfDiscoveryTool/index.html"gitHub="https://github.com/CreativeAutmations/SelfDiscoveryTool" history={<div><p>This is the first project of SkillPill through which our journey started. It was developed for a newly formed company called wings2life whose aim is to unlock someone’s true potential. For that they require to build a web application which enables users to select 6 qualities from around 350 qualities. But choosing 6 from 350 is way too hectic job so we divided it into stages where at first stage you can select as many qualities you want(minimum 24) which is reduced to 24 exactly and then reduced to 6. At first we developed this with basic HTML, CSS and JS. We just knew a bit of HTML and CSS before starting the project so we were continuously learning to develop the web application.</p>
            <p>After developing basic requirements we had a meeting with our clients explaining the project. After getting feedback on the product we realised to fulfill their requirement we need to revamp the interface.</p>
            <p>So we developed a new interface to fulfill their requirements we show it the clients and they were satisfied with the product</p>
            <p>But to get our hands dirty on various technologies we developed our interface with react as well which was full of learning as we were getting problems every 5 minutes in the beginning. Though we initially felt that react don’t reduces our work and is making things more complicated but while developing our interface with react we realized the benefits and importance of React</p>
            <p>We also used AWS to get our data from the backend in the form of APIs. THis was again very difficult initially as we’ve never even heard about AWS before.</p></div>} back={this.home}/>);
        else if(this.state.progress)
        return (<Project head="Progress Tracker" problem="To develop an interface to help user being consistent and discipline towards work" technologies={["React","Css","Aws"]} live="https://hitjatin.github.io/progress-tracker/" gitHub="https://github.com/Ritik98/progress-tracker" history={<div><p>As we were on our first project , we had an excel spreadsheet where we used to put our record of our day ,i.e, How many slots we gave to a particular task and what were our  achievements , learning   and challenges, which really helped us analyzing ourselves</p>
            <p>So our mentor suggested why don't we make an app or website so that other students take advantage of something like this .</p>
            <p>After 2-3 weeks, we made an user friendly interface which basically shows daily progress,consistency and past record of a person.</p>
            </div>} back={this.home}/>);
        else
        return(<div></div>);
    }

}

export default Works;
