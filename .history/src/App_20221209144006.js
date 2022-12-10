/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';
import data from './data';
import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import Header from './components/Header';

export default function App() {
  const { food_data } = data;

  const [mealItems, setMealItems] = useState([]); //totalNutrients is [] empty array

  const onAdd = (meal) => { //get a meal and add to mealItems
    const exists = mealItems.find((x) => x.id === meal.id);
    if (exists) {
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x
        );
      setMealItems(newMealItems);
    };

    const onRemove = (meal) => { //get a meal and remove from

    }

    return (
      <div className="container">
        <Header />

        <div className="wrapper-card">
          <h3>Wednesday, 7th December 2022</h3>
        </div>

        <div className="row">

          <div className="col-left">
            <div className="wrapper-card">
              <FoodList onAdd={onAdd} onRemove={onRemove} food_data={food_data} />
            </div>
          </div>
          <div className="col-right">
            <div className="wrapper-card">
              <CalculateNutrients onAdd={onAdd} mealItems={mealItems} />
            </div>

            <div className="wrapper-card">
              Selected Item info
            </div>

          </div>

        </div>

      </div>


    );
  }
