import React, { Component } from 'react';
import { Button, Label, Col, Row ,Input, Form} from 'reactstrap';
import './Contact.css';

class Contact extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
      var contact;
      values.preventDefault();
      if(this.formcheck.value)
      contact = this.contact.value;
      else
      contact = "Feedback";
        var raw = JSON.stringify({
          "firstName": this.firstname.value,
          "lastName": this.lastname.value,
          "number":parseInt(this.Tel.value),
          "email":this.Email.value,
          "contact":contact,
          "query":this.query.value

        });
        var api = "https://9xavxk7h76.execute-api.ap-south-1.amazonaws.com/dev";
        this.setData(raw, api);
        alert("Thank you , your response is saved")
      }

    setData(raw, api) {
      // instantiate a headers object
      var myHeaders = new Headers();
      // add content type header to object
      myHeaders.append("Content-Type", "application/json");
      // using built in JSON utility package turn object to string and store in a variable
      // create a JSON object with parameters for API call and store in a variable
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      // make API call with parameters and use promises to get response
      fetch(api, requestOptions)
        .then(response => response.text())
        .then(result => console.log(JSON.parse(result).body))
        .catch(error => console.log('error', error));
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 " style={{textAlign:'left'}}>
                        <h3>Contact Us/Feedback</h3>
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
                                    innerRef={(input) => this.firstname = input}
                                    className="form-control"/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>

                                <Col md={10}>
                                    <Input model=".lastname" id="lastname" name="lastname"
                                    placeholder="Last Name" className="form-control"
                                      innerRef={(input) => this.lastname = input} />

                                </Col>

                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Contact Number</Label>
                                <Col md={10}>
                                    <Input type="text" model=".telnum" id="telnum" name="telnum"
                                    placeholder="Contact Number" className="form-control"
                                    innerRef={(input) => this.Tel = input} />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="text" model=".email" id="email" name="email"
                                    placeholder="Email"
                                    className="form-control"
                                      innerRef={(input) => this.Email = input} />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Input type="checkbox" model=".agree" name="agree"
                                                className="form-check-input"
                                                innerRef={(input) => this.formcheck = input}   /> {' '}
                                                <strong>May we contact you?</strong>
                                        </Label>
                                    </div>
                                </Col>

                                <Col md={{size:4 , offest: 1}}>
                                    <Input type="select" model="select" name="contactType"
                                     className="form-control"
                                       innerRef={(input) => this.contact = input }>
                                    <option>Tel.</option>
                                    <option>Email</option>
                                    </Input>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Query</Label>
                                <Col md={10}>
                                    <Input type="textarea"area model=".message" id="message" name="message"
                                    rows="12" className="from-control col-12"
                                      innerRef={(input) => this.query = input}  />
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
