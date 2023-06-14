import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Location from './components/Location.jsx';

const pathname = window.location.pathname;
const id = pathname.split('/').pop(); 
ReactDOM.render(
  <React.StrictMode>
    <Location />
  </React.StrictMode>,
  document.getElementById('example')
);
