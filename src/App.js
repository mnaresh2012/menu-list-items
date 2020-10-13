import React, { Component } from 'react';

import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className = 'container'>
        <Header />
        <p>Hello</p>
        <Footer />
      </div>
    );
  }
}
export default App;