/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import './styles/searchFood.css';
import data from './data';
import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';
import Header from './components/Header';

function App() {
  const { food_data } = data;
  const [mealItems, setMealItems] = useState([]); //totalNutrients is [] empty array

  // Add an item from Food List using add meal btn to right column calculate nutirients tab
  const onAdd = (meal) => { //get a meal and add to mealItems
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists) { //increase it by 1 qty
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x //if meal in calc is == to meal id else dont change qty
      );
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
      console.log(mealItems);
    } else {
      const newMealItems = [...mealItems, { ...meal, qty: 1 }];
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    }
  };

  // Remove an item from mealItems using minus meal btn to right column calculate nutirients tab
  const onRemove = (meal) => {
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists.qty === 1) {
      const newMealItems = mealItems.filter((x) => x.id !== meal.id);
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    } else {
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty - 1 } : x
      );
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    }
  };

  useEffect(() => {
    setMealItems(localStorage.getItem('mealItems') ? JSON.parse(localStorage.getItem('mealItems'))
      : []
    );
  }, []);
  // const exists = mealItems.find((x) => x.id === meal.id);
  // if (exists) {
  //   setMealItems(
  //     mealItems.map((x) =>
  //       x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x
  //     )
  //   );
  // } else {
  //   setMealItems(([...mealItems, { ...meal, qty: 1 }]));
  // }

  return (
    <div className="container">
      <Header countMealItems={mealItems.length} />

      <div className="wrapper-card">
        <h3>Wednesday, 7th December 2022</h3>
      </div>

      <div className="row">

        <div className="col-left">
          <div className="wrapper-card">
            <FoodList onAdd={onAdd} onRemove={onRemove} mealItems={mealItems} food_data={food_data} />
          </div>
        </div>
        <div className="col-right">
          <div className="wrapper-card">
            <CalculateNutrients onAdd={onAdd} onRemove={onRemove} mealItems={mealItems} countMealItems={mealItems.length} />
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