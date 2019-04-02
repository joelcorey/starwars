import React from 'react';

const CharacterContext = React.createContext({
  people: [],
  handleSearchCharacter: () => {},
  isLoading: false,
})

export default CharacterContext;