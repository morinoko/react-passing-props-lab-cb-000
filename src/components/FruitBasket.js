import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

class FruitBasket extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null
    };
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter
          filters={this.props.filters}
          handleChange={this.props.handleChange}
        />
        <FilteredFruitList
          items={this.props.items} />
      </div>
    );
  }
}

export default FruitBasket;
