import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UsersPage from '../src/Calculator/UsersPage';
import Calculator from '../src/Calculator/Calculator';
import store from '../src/Calculator/store';

ReactDOM.render(
  <Provider store={store}>
    <div>
      <UsersPage />
      <Calculator />
    </div>
  </Provider>,
  document.getElementById('root')
);
