import React, { Component } from 'react';
import './App.css';

import Header from './component/header/header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main role="main" className="App">
          hi
        </main>
      </>
    );
  }
}

export default App;
