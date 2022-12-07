/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import './App.css';
import ContactCard from './components/ContactCard';

const App = () => {
  
  return (
    <div className="container">
      <h2>Fetch user cards and their data</h2><br></br>
      <div className="contact-list">
        {results.map((result, index) => {
          return (
            <ContactCard key={index}
              avatarUrl={result.picture.medium}
              name={result.name.first}
              email={result.email}
              age={result.dob.age} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
