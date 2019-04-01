import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import SearchPeople from './component/SearchPeople/SearchPeople'

import Header from './component/Header/Header';

class App extends Component {
  state = {
    people: [],
    isLoading: false,
    isError: null,
  }
  fetchApi(endpoint, stateKey = 'people', method = 'GET') {
    fetch(`http https://swapi.co/api/${endpoint}`, {
      method: method,
      headers: {
        'content-type': 'application-json'
      },
    })
    .then(response => response.json())
    .then(response => this.setState({[stateKey]: response}))
    .catch(error => this.setState({isError: error}));
  }
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
