import React from 'react';

const CharacterContext = React.createContext({
  people: [],
  handleSearchCharacter: () => {},
})

export default CharacterContext;