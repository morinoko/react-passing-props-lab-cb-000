import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = ({ fruits, filters, selectedFilter, onUpdateFilter }) =>
  <div className="fruit-basket">
    <Filter
      filters={filters}
      handleChange={onUpdateFilter} />
    <FilteredFruitList
      fruits={fruits}
      filter={selectedFilter} />
  </div>;

FruitBasket.defaultProps = {
  fruits: [],
  filters: [],
  currentFilter: null,
  onUpdateFilter: () => {}
}

export default FruitBasket;
