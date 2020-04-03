import React from 'react';
import Posts from './components/Posts';
import Postsform from './components/Postsform';
import './App.css';

function App() {
  return (
    <div className="App">
      <Postsform />
      <Posts />
    </div>
  );
}

export default App;
