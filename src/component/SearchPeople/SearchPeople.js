import React, { Component } from 'react';

export default class SearchPeople extends Component {

  render(){

    return (
      <form>
        <label htmlFor="searchPeople">
          Search People: 
        </label>
        <input id="searchPeople" type="text" />
        <button>Search</button>
      </form>
    )
  }
  
}