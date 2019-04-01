import React from 'react';

const PeopleContext = React.createContext({
  people: [],
  handleSearchPeople: () => {},
})

export default PeopleContext;