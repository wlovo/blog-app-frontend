import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppWrapper from './components/AppWrapper';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </div>
  );
}

export default App;
