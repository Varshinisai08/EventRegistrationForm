// src/App.js
import React from 'react';
import EventRegistrationForm from './EventRegistrationForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Event Registration Form</h1>
        <EventRegistrationForm />
      </header>
    </div>
  );
}

export default App;
