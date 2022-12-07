/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';

import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import Header from './components/Header';

const App = () => {

  return (
    <div className="container">
      <Header />

      <div className="wrapper-card">
        <h3>Wednesday, 7th December 2022</h3>
      </div>

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

          <div className="wrapper-card">
            Selected Item info
          </div>

        </div>

      </div>

    </div>
  );
}

const default_foods = [
    {
      avatarUrl: "http://via.placeholder.com/150",
      name: "Jordan Bill",
      email: "jb@gmail.com",
      age: 25
    },
    {
      avatarUrl: "http://via.placeholder.com/150",
      name: "Jordan Bill",
      email: "jb@gmail.com",
      age: 25
    },
    {
      avatarUrl: "http://via.placeholder.com/150",
      name: "Jordan Bill",
      email: "jb@gmail.com",
      age: 25
    },
    {
      avatarUrl: "http://via.placeholder.com/150",
      name: "Jordan Bill",
      email: "jb@gmail.com",
      age: 25
    },
    {
      avatarUrl: "http://via.placeholder.com/150",
      name: "Er Bill",
      email: "jb@gmail.com",
      age: 25
    },
    {
      avatarUrl: "http://via.placeholder.com/150",
      name: "Terry Bill",
      email: "jb@gmail.com",
      age: 25
    }
  ];

export default App;
