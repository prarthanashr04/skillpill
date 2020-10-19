import React, { Component } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Aboutus from './components/Aboutus/Aboutus';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHome: true,
      isAboutus: false,
      isWorks: false,
      isContact: false
    };
    this.home = this.home.bind(this);
    this.aboutus = this.aboutus.bind(this);
    this.works = this.works.bind(this);
    this.contact = this.contact.bind(this);
  }

  home() {
    this.setState({
      isHome: true,
      isAboutus: false,
      isWorks: false,
      isContact: false
    });
  }
  aboutus(){
    this.setState({
      isHome: false,
      isAboutus: true,
      isWorks: false,
      isContact: false
      });
    }
    works(){
      this.setState({
        isHome: false,
        isAboutus: false,
        isWorks: true,
        isContact: false
      });
    }
    contact(){
      this.setState({
          isHome: false,
          isAboutus: false,
          isWorks: false,
          isContact: true
      });
    }

    render(){
      var current;
      if (this.state.isHome)
        current = <Home />;
      else if (this.state.isAboutus)
        current = <Aboutus />;
      else if (this.state.isWorks)
        current = <Works />;
      else if (this.state.isContact)
        current = <Contact />;

      return(
        <div className="App" >

          <Header home={this.home} aboutus={this.aboutus} works={this.works} contact={this.contact} />
          {current}

        </div>
      );
    }
}

      export default App;
