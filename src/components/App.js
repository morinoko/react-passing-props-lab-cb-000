import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null,
      fruits: []
    };
  }
  
  componentDidMount() {
    this.fetchFilters();
    this.fetchFruits();
  }
  
  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }
  
  fetchFruits = () => {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruits => this.setState({ fruits }));
  }
  
  updateFilter = event => {
    console.log('new filter: ', event.target.value);
    
    this.setState({ selectedFilter: event.target.value });
  }
  
  render() {
    return (
      <FruitBasket
        fruits={this.state.fruits}
        filters={this.state.filters}
        selectedFilter = {this.state.selectedFilter}
        onUpdateFilter={this.updateFilter}
     />
    )
  }
}

export default App;
