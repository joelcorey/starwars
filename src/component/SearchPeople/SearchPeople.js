import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';
import ResultsPeople from '../ResultsPeople/ResultsPeople';

export default class SearchPeople extends Component {
  static contextType = CharacterContext;

  render(){
    const { handleSearchCharacter } = this.context;
    
    return (
      <div>
        <form onSubmit={(e) => handleSearchCharacter(e)}>
          <label htmlFor="searchPeople">
            Search People: 
          </label>
          <input id="searchPeople" type="text" />
          <button>Search</button>
        </form>
        <ResultsPeople />
      </div>
    )
  }
  
}