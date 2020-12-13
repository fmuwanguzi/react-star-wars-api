import { BrowserRouter, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import StartshipPage from './components/StarshipPage';
import Nav from './components/Nav';

import './App.css';

function App() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results)
    }

    fetchStarships();

  }, [])

  console.log('----starships----', starships);


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
