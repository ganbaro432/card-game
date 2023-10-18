import { useState } from 'react';
import Cards from './components/Cards';
import Explain from './components/Explain';
import './App.css';

function App() {
  const imageList = {
    alpaca: '/img/alpaca.png',
    capybara: '/img/capybara.png',
    cat: '/img/cat.png',
    crab: '/img/crab.png',
    dog: '/img/dog.png',
    monkey: '/img/monkey.png',
    octopus: '/img/octopus.png',
    snails: '/img/snails.png',
  };

  return (
    <div className='wrapper'>
      <h1>神経衰弱</h1>
      <Cards />
      <Explain />
    </div>
  )
}

export default App
