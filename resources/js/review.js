import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header.jsx';
import RevLoc from './components/RevLoc.jsx';
import ReviewForm from './components/ReviewForm.jsx';

const pathname = window.location.pathname;
const location = pathname.split('/').pop();

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <h2 style={{ textAlign: 'center', fontWeight: 'bold',color:'white',marginBottom:'40px'}} className="mt-2">Review {location}</h2>
    <RevLoc location={location} />
    <ReviewForm />
  </React.StrictMode>,
  document.getElementById('example')
);
