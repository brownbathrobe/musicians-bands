'use strict';

import React, { Component } from 'react';

export default class Item extends Component {
  render() {
    let { first_name, last_name, band } = this.props.musician;
    return (
      <li className='item'>
        <p>{ first_name } { last_name } - { band.name }</p>
      </li>
    );
  };
};
