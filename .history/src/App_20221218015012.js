/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import './App.css';
import './styles/searchFood.css';

import food_data_json from './data';
import CalculateNutrients from './components/CalculateNutrients';
import FoodList from './components/FoodList';

import { nanoid } from 'nanoid';
import SearchFood from './components/SearchFood';

function App() {
  const [searchText, setSearchText] = useState('');
  const [foods, setFoods] = useState(food_data_json);

  const [ food_data, setFoodData ] = foods;
  const [newFoodItems, setNewFoodItems] = useState(foods); //totalNutrients is [] empty array

  const [mealItems, setMealItems] = useState([]); //totalNutrients is [] empty array

  // Add an item from Food List using add meal btn to right column calculate nutirients tab
  const handleAddFoodItem = (name, serving, protein, calories, sugar) => { //get a meal and add to mealItems
    console.log("in func")
    const food = {
      id: nanoid(),
      name: name,
      serving: serving,
      protein: protein,
      calories: calories,
      sugar: sugar,
      category: "lunch"
    }
    // food_data.push(food);
    const newFoods = [...foods, food]
    setFoods(newFoods); //'
    localStorage.setItem('foods', JSON.stringify(newFoods));

    console.log(newFoods)
  };

  useEffect(() => {
    setFoods(localStorage.getItem('foods') ? JSON.parse(localStorage.getItem('foods'))
      : []
    );
  }, []);

  const handleDeleteFoodItem = (id) => {
    const removeFoodItem = foods.filter((food) => food.id !== id);
    setFoods(removeFoodItem);
    localStorage.setItem('foods', JSON.stringify(removeFoodItem));
  }; 

  // Add an item from Food List using add meal btn to right column calculate nutirients tab
  const onAdd = (meal) => { //get a meal and add to mealItems
    const exists = mealItems.find((x) => x.id === meal.id);

    if (exists) { //increase it by 1 qty
      const newMealItems = mealItems.map((x) =>
        x.id === meal.id ? { ...exists, qty: exists.qty + 1 } : x //if meal in calc is == to meal id else dont change qty
      );
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
      // console.log(mealItems);
    } else {
      const newMealItems = [...mealItems, { ...meal, qty: 1 }];
      setMealItems(newMealItems);
      localStorage.setItem('mealItems', JSON.stringify(newMealItems));
    }
  };

  // Remove an item from mealItems using minus meal btn inside right column calculate nutirients tab
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

  
  return (
    <div>
      <div className="container">
        {/* <Header countMealItems={mealItems.length} /> */}

        <div className="wrapper-card">
          <h3>Wednesday, 7th December 2022</h3>
        </div>

        <div className="row">

          <div className="col-left">
            <div className="wrapper-card-food-list">
              <SearchFood
                handleSearchFood={setSearchText}
              />
              <FoodList
                food_data={foods.filter((food) => food.name.toLowerCase().includes(searchText))}
                onAdd={onAdd} onRemove={onRemove}
                mealItems={mealItems}
                handleAddFoodItem={handleAddFoodItem} handleDeleteFoodItem={handleDeleteFoodItem}

              />
            </div>
          </div>
          <div className="col-right">
            <div className="wrapper-card">
              <CalculateNutrients onAdd={onAdd} onRemove={onRemove} 
              mealItems={mealItems} countMealItems={mealItems.length} />
            </div>

            <div className="wrapper-card">
              Selected Item info
            </div>
          </div>
        </div>
        <ReactModal

isOpen={
  false
/* Boolean describing if the modal should be shown or not. */}

onAfterOpen={
  handleAfterOpenFunc
/* Function that will be run after the modal has opened. */}

onAfterClose={
  handleAfterCloseFunc
/* Function that will be run after the modal has closed. */}

onRequestClose={
  handleRequestCloseFunc
/* Function that will be run when the modal is requested
   to be closed (either by clicking on overlay or pressing ESC).
   Note: It is not called if isOpen is changed by other means. */}

closeTimeoutMS={
  0
/* Number indicating the milliseconds to wait before closing
   the modal. */}

style={
  { overlay: {}, content: {} }
/* Object indicating styles to be used for the modal.
   It has two keys, `overlay` and `content`.
   See the `Styles` section for more details. */}

contentLabel={
  "Example Modal"
/* String indicating how the content container should be announced
   to screenreaders */}

portalClassName={
  "ReactModalPortal"
/* String className to be applied to the portal.
   See the `Styles` section for more details. */}

overlayClassName={
  "ReactModal__Overlay"
/* String className to be applied to the overlay.
   See the `Styles` section for more details. */}

id={
  "some-id"
/* String id to be applied to the content div. */}

className={
  "ReactModal__Content"
/* String className to be applied to the modal content.
   See the `Styles` section for more details. */}

bodyOpenClassName={
  "ReactModal__Body--open"
/* String className to be applied to the modal ownerDocument.body
   (must be a constant string).
   This attribute when set as `null` doesn't add any class
   to document.body.
   See the `Styles` section for more details. */}

htmlOpenClassName={
  "ReactModal__Html--open"
/* String className to be applied to the modal ownerDocument.html
   (must be a constant string).
   This attribute is `null` by default.
   See the `Styles` section for more details. */}

ariaHideApp={
  true
/* Boolean indicating if the appElement should be hidden */}

shouldFocusAfterRender={
  true
/* Boolean indicating if the modal should be focused after render. */}

shouldCloseOnOverlayClick={
  true
/* Boolean indicating if the overlay should close the modal */}

shouldCloseOnEsc={
  true
/* Boolean indicating if pressing the esc key should close the modal
   Note: By disabling the esc key from closing the modal
   you may introduce an accessibility issue. */}

shouldReturnFocusAfterClose={
  true
/* Boolean indicating if the modal should restore focus to the element
   that had focus prior to its display. */}

role={
  "dialog"
/* String indicating the role of the modal, allowing the 'dialog' role
   to be applied if desired.
   This attribute is `dialog` by default. */}

preventScroll={
  false
/* Boolean indicating if the modal should use the preventScroll flag when
   restoring focus to the element that had focus prior to its display. */}

parentSelector={
  () => document.body
/* Function that will be called to get the parent element
   that the modal will be attached to. */}

aria={
  {
    labelledby: "heading",
    describedby: "full_description"
  }
/* Additional aria attributes (optional). */}

data={
  { background: "green" }
/* Additional data attributes (optional). */}

testId={
  ""
/* String testId that renders a data-testid attribute in the DOM,
  useful for testing. */}

overlayRef={
  setOverlayRef
/* Overlay ref callback. */}

contentRef={
  setContentRef
/* Content ref callback. */}

overlayElement={
  (props, contentElement) => <div {...props}>{contentElement}</div>
/* Custom Overlay element. */}

contentElement={
  (props, children) => <div {...props}>{children}</div>
/* Custom Content element. */}
>
  <p>Modal Content</p>
</ReactModal>
      </div>
      <footer style={{ marginLeft: '1rem', marginBottom: '1rem', color: 'rgb(95, 95, 95)' }}>
        <small>Developed by <a href="https://github.com/Vasil1001">Vasil.</a></small>
        <small>&nbsp;&nbsp;Illustration by Icons 8 from <a href="https://icons8.com/">Ouch!</a></small>
      </footer>
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