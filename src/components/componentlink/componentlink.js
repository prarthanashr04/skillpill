import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import './componentlink.css';
const CardComponent = (props) => {
  return (
    <div>
      <Card body inverse id = 'cardcss'  >
        <CardTitle className="body chead" >{props.title}</CardTitle>
        <CardText className="body">{props.content}</CardText>
        <Button onClick = {props.onClick} id = 'btncss' >Know More</Button>
      </Card>
      </div>
    )
  };
export default CardComponent;
