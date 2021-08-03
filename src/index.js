import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Buat initialState, supaya state tidak me-return undefined
const initialState = {
  count: 0,
};

// Buat actionTypes 
const HANDLE_ADD = 'HANDLE_ADD';
const HANDLE_MINUS = 'HANDLE_MINUS';

// buat reducer
const rootReducer = (state = initialState, action) => {
  if(action.type === HANDLE_ADD) {
    return {
      ...state,
      count: state.count + 1,
    } 
  } else if (action.type === HANDLE_MINUS) {
    return {
      ...state,
      count: state.count - 1,
    }
  }
  return state;
};

// buat store
const globalStore = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
