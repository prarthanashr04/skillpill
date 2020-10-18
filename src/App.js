import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import Home from './components/Home/Home';
import { Switch, Route , BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/home"/>
          <Home/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
