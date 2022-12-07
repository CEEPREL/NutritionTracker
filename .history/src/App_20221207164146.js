/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';


const App = () => {

  return (
    <div className="container">
      <h2>Fetch user cards and their data</h2><br></br>
      <Header />
      <Main/>
    </div>
  );
}

export default App;
