import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';

export default class ResultsPeople extends Component {
  static contextType = CharacterContext;

  render(){
    const { people } = this.context;
    
    const html = people.map(person => {
      return (<li>{person.name}</li>)
    });
    return (
      <ul>
        {html}
      </ul>
    )
  }
  
}