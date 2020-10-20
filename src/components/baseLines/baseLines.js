import React from 'react';
import { Component } from 'react';
import '../baseLines/baseLines.css';

export default class BaseLines extends Component{
    render(){
        return(<div id="baseLines">
        <div id="heading">BaseLines</div>
            <div><b className="head">Problem:</b>To develop a user friendly interface to select 6 top qualities</div>
            <div>
                <div className="head"><b>Technologies Used:-</b></div>
                <div className="fields">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>AWS</li>
                        <li>Bootstrap</li>
                        <li>Reactstrap</li>
                    </ul>
                </div>
            </div>
            <div><b className="head"><a href="#">Live Demo</a>&nbsp;<a href="#">View on GitHub</a></b></div>
            <div>
                <div className="head"><b>History</b></div>
                <div className="fields">
                <p>This is the first project of SkillPill through which our journey started. It was developed for a newly formed company called wings2life whose aim is to unlock someone’s true potential. For that they require to build a web application which enables users to select 6 qualities from around 350 qualities. But choosing 6 from 350 is way too hectic job so we divided it into stages where at first stage you can select as many qualities you want(minimum 24) which is reduced to 24 exactly and then reduced to 6. At first we developed this with basic HTML, CSS and JS. We just knew a bit of HTML and CSS before starting the project so we were continuously learning to develop the web application.</p>
                <p>After developing basic requirements we had a meeting with our clients explaining the project. After getting feedback on the product we realised to fulfill their requirement we need to revamp the interface.</p>
                <p>So we developed a new interface to fulfill their requirements we show it the clients and they were satisfied with the product</p>
                <p>But to get our hands dirty on various technologies we developed our interface with react as well which was full of learning as we were getting problems every 5 minutes in the beginning. Though we initially felt that react don’t reduces our work and is making things more complicated but while developing our interface with react we realized the benefits and importance of React</p>
                <p>We also used AWS to get our data from the backend in the form of APIs. THis was again very difficult initially as we’ve never even heard about AWS before.</p>
                </div>
            </div>
        </div>);
    }
}