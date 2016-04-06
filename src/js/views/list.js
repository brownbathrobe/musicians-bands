'use strict';

import React, { Component } from 'react';
import Item from './item';

class List extends Component {
  render() {
    return (
      <ul>
        { this.props.musicians.map((m, i) => <Item musician={m} key={i} />) }
      </ul>
    );
  };
};

export default List;
