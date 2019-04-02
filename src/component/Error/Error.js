import React, { Component } from 'react';
import CharacterContext from '../../context/CharacterContext';

export default class Error extends Component {
  static contextType = CharacterContext;

  render(){
    const { errors } = this.context;
    
    return (
      <section>
        
      </section>
    )
  }
  
}