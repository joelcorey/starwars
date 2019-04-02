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
    .then(response => this.setState(
      {
        [stateKey]: response.results,
        isLoading: false
      }))
    .catch(error => this.setState({isError: error}));
  }
  handleSearchCharacter(e) {
    e.preventDefault();
    this.setState({ isLoading: true });
    const character = e.currentTarget.searchPeople.value;
    this.fetchApi(`people/?search=${character}`);
  }
  render() {
    let loading;
    if(this.state.isLoading) {
      loading = (<div className="loading">
        <img src="loading.jpg" />
      </div>)
    }
    return (
      
      <CharacterContext.Provider
        value={{
          people: this.state.people,
          handleSearchCharacter: (e) => this.handleSearchCharacter(e),
          isLoading: this.state.isLoading,
        }}
      >
        {loading}
        <Header />
        <main role="main" className="App">
          <Route exact path="/" component= { SearchPeople } />
          {/* nest SearchPeople and ResultsPeople in one component? */}
          
        </main>
      </CharacterContext.Provider>
      
    );
  }
}

export default App;
