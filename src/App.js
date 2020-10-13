import React, { Component } from 'react';
import  { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import MenuComponent from './components/MenuComponents';

import StarterPageComponent from './components/pages/StarterPageComponent';
import MainPageComponent from './components/pages/MainPageComponent';
import DessertPageComponent from './components/pages/DessertPageComponent';
import SaladPageComponent from './components/pages/SaladPageComponent';

class App extends Component {
  render() {
    return (
      <div className = 'container'>
        <Header />
        <Router>
          <MenuComponent />
          <Route exact path="/">
            <StarterPageComponent />
          </Route>
          <Route path="/starter">
            <StarterPageComponent />
          </Route>
          <Route path="/main">
            <MainPageComponent />
          </Route>
          <Route path="/dessert">
            <DessertPageComponent />
          </Route>
          <Route path="/salad">
            <SaladPageComponent />
          </Route>
        </Router>
        <Footer />
      </div>
    );
  }
}
export default App;