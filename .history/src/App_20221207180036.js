/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import SearchFood from './components/SearchFood';

const App = () => {

  return (
    <div className="container">
      <Header />
      <SearchFood />
      <Main/>
    </div>
  );
}

export default App;
