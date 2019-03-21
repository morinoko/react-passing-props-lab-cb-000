import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruit, filters, selectedFilter, onUpdateFilter }) =>
  <div className="fruit-basket">
    <Filter
      filters={filters}
      handleChange={onUpdateFilter} />
    <FilteredFruitList
      fruit={fruit}
      filter={selectedFilter} />
  </div>;

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  onUpdateFilter: () => {}
}

export default FruitBasket;
