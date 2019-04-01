import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchPeople from './component/SearchPeople/SearchPeople'

import Header from './component/Header/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main role="main" className="App">
          <Route exact path="/" component= { SearchPeople } />

          
        </main>
      </>
    );
  }
}

export default App;
