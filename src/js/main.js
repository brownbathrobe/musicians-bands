'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import List from './views/list';
import { createStore } from 'redux'
import { connect } from 'react-redux';
import reducers from './reducers'
import { merged } from './reducers/selectors';
import 'css/style.scss';

let store = createStore(reducers);

const mapStateToProps = state => {
  let musicians = merged(state);
  return { musicians };
};

@connect(mapStateToProps)
class App extends Component {
  render() {
    return (
      <div>
        <h1>Musicians & Bands</h1>
        <List musicians={this.props.musicians} />
      </div>
    );
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
);
