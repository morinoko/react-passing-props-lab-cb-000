import React, { Component } from 'react';

class FilteredFruitList extends Component {
  render() {

    return (
      <ul className="fruit-list">
        {this.props.items.map((item, index) => <li key={index}>{item.char}</li>)}
      </ul>
    );
  }
}

export default FilteredFruitList;
