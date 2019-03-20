import React from 'react';

const FilteredFruitList = ({ fruits, filter }) => {
  const fruitList = !filter ? fruits : fruits.filter(fruit => fruit.fruit_type === filter);
                      
  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, index) => <li key={fruit}>{fruit.char}</li>)}
    </ul>
  );
};
  
FilteredFruitList.defaultProps = {
  fruits: [],
  filter: null
};

export default FilteredFruitList;