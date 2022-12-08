/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';
import data from './data';

import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import Header from './components/Header';

const App = () => {

//   const [foods, setFoods] = useState([
//     {
//         name: "Chicken Breast",
//         size: "200g",
//         protein: "25g",
//         category: "lunch"
//     }, {
//         name: "Egg",
//         size: "50g",
//         protein: "6g",
//         category: "breakfast"
//     }, {
//         name: "Protein Oats",
//         size: "200g",
//         protein: "15g",
//         category: "breakfast"
//     }, {
//         name: "Protein Yogurt",
//         size: "200g",
//         protein: "25g",
//         category: "breakfast"
//     }, {
//         name: "Protein Shake",
//         size: "200ml",
//         protein: "25g",
//         category: "lunch"
//     }
//  ]);
 const {food_data} = data;
  return (
    <div className="container">
      <Header />

      <div className="wrapper-card">
        <h3>Wednesday, 7th December 2022</h3>
      </div>

      <div className="row">

        <div className="col-left">
          <div className="wrapper-card">
            <FoodList food_data={food_data}/>
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



export default App;
