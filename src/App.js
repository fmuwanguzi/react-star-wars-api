import { BrowserRouter, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import StartshipPage from './components/StarshipPage';
import Nav from './components/Nav';

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <div>
   <Nav />
   <Route exact path="/" component={StartshipPage} />
   </div>
   </BrowserRouter>
  );
}

export default App;
