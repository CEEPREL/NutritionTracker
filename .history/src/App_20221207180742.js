/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import FoodList from './components/FoodList';
import Header from './components/Header';
import Main from './components/Main';
import SearchFood from './components/SearchFood';

const App = () => {

  return (
    <div className="container">
      <Header />
      <SearchFood />
      <div className="row">
        <div className="col-left">
          <div className="wrapper-card">
            <FoodList />
          </div>
        </div>
        <div className="col-right">
          <div className="wrapper-card">
            <CalculateNutrients />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
