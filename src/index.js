import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import axios from 'axios';

// const store = createStore(null);

// For GET requests
axios.interceptors.request.use(
  (req) => {
    req.baseURL = 'https://testing-1.api.encamino.ar';
    req.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM5LCJpYXQiOjE2NDU4MTgyMTgsInJvbCI6ImRpc3RyaWJ1aWRvciJ9.zcxMSyoDm3HdJuJ0oLn387FDvzFmQ209dy7q5blzmI4';
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

ReactDOM.render(
  // <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
