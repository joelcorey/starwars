import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import CharacterContext from './context/CharacterContext';
import SearchPeople from './component/SearchPeople/SearchPeople'

import Header from './component/Header/Header';

class App extends Component {
  state = {
    people: [],
    isLoading: false,
    errors: null,
  }
  fetchApi(endpoint, stateKey = 'people', method = 'GET') {
    fetch(`https://swapi.co/api/${endpoint}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(response => this.setState({[stateKey]: response}, () => {
      console.log(this.state.people)
    }))
    .catch(error => this.setState({isError: error}));
  }
  handleSearchCharacter(e) {
    e.preventDefault();
    const character = e.currentTarget.searchPeople.value;
    this.fetchApi(`people/?search=${character}`);
  }
  render() {
    return (
      
      <CharacterContext.Provider
        value={{
          people: this.state.people,
          handleSearchCharacter: (e) => this.handleSearchCharacter(e),
        }}
      >
        <Header />
        <main role="main" className="App">
          <Route exact path="/" component= { SearchPeople } />

          
        </main>
      </CharacterContext.Provider>
      
    );
  }
}

export default App;
