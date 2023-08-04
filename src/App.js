import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UsersPage from './UsersPage';
import Calculator from './Calculator/Calculator';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <UsersPage />
        <Calculator />
      </div>
    </Provider>
  );
};
export default App;
