import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Carousel.jsx';
import Tabs from './components/Tabs.jsx';
import './index.css';
import Header from './components/Header.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
    <Tabs />
  </React.StrictMode>,
  document.getElementById('example')
);
