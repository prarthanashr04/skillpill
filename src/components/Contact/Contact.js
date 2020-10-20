import React, { Component } from 'react';
import { Button, Label, Col, Row ,Input, Form} from 'reactstrap';
import './Contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));

    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 " style={{textAlign:'left'}}>
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input model=".firstname" id="firstname" name="firstname" 
                                    placeholder="First Name" 
                                    className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input model=".lastname" id="lastname" name="lastname" 
                                    placeholder="Last Name" className="form-control"/>
                                    
                                </Col>
        
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                    <Input type="text" model=".telnum" id="telnum" name="telnum" 
                                    placeholder="Tel. Number" className="form-control"/>     
                                                       
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" model=".email" id="email" name="email" 
                                    placeholder="Email"
                                    className="form-control"/>
                                    
                                </Col>                                
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}> 
                                    <div className="form-check">
                                        <Label check>
                                            <Input type="checkbox" model=".agree" name="agree"
                                                className="form-check-input"
                                                /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                
                                <Col md={{size:4 , offest: 1}}>
                                    <Input type="select" model="select" name="contactType"
                                     className="form-control">
                                    <option>Tel.</option>
                                    <option>Email</option>    
                                    </Input>
                                </Col> 
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Query</Label>
                                <Col md={10}>
                                    <Input type="textarea"area model=".message" id="message" name="message" 
                                    rows="12" className="from-control col-12" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                    Send Query
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;