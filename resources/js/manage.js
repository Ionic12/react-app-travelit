import React from 'react';
import ReactDOM from 'react-dom';
import Manage from './components/Manage.jsx';
import './index.css';
import Header from './components/Header.jsx';
import InputDataForm from './components/DataForm.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <h2 style={{ textAlign: 'center', fontWeight: 'bold' }} className="mt-2">Manage Destination</h2>
    <Manage />
    <InputDataForm />
  </React.StrictMode>,
  document.getElementById('example')
);
