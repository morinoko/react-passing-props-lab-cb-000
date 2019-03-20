import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null,
      items: []
    };
  }
  
  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(items => this.setState({ items }));
  }
  
  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    
    const newFilter = event.target.value;
    const updatedItems = !newFilter || newFilter === 'all' ? 
                         this.state.items :
                         this.state.items.filter(item => item.fruit_type === newFilter);
    
    this.setState({ 
      selectedFilter: event.target.value,
      items: updatedItems
    });
  }
  
  render() {
    return (
      <FruitBasket handleChange={this.handleFilterChange} items={this.state.items} />
    )
  }
}

export default App;
