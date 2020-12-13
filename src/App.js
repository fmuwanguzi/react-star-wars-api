import { BrowserRouter, Route } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Dimmer, Loader } from 'semantic-ui-react'
import StartshipPage from './components/StarshipPage';
import Nav from './components/Nav';

import './App.css';
import { Container } from 'semantic-ui-react';

function App() {
  const [starships, setStarships] = useState([]); // set to an empty array
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    async function fetchStarships() {
      let res = await fetch('https://swapi.dev/api/starships/?format=json');
      let data = await res.json();
      setStarships(data.results)
    }

    fetchStarships();
    setLoading(false);

  }, [])
  //testing to make sure you are fetching the data
  console.log('----starships----', starships);


  return (
   <BrowserRouter>
   <Nav />
   <div>
     {/* Setting up loading using dimmer and loader */}
   {loading ? (
     <Dimmer active inverted>
       <Loader inverted>Loading</Loader>
     </Dimmer>
   ) : (
     
     <Route exact path="/">
       <StartshipPage data={starships}/>
     </Route>
   ) }
   </div>
   </BrowserRouter>
  );
}

export default App;
