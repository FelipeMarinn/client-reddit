import React from 'react';
import { Header } from '../components/Header/Header';
import { SubReddits } from '../components/SubReddits/SubReddits' 
import { Home } from '../components/Home/Home';
import './App.css';

function App() {
  return (
      <div className="App">
        <Header />
        <Home/>
        <SubReddits />
      </div>
  );
}

export default App;
