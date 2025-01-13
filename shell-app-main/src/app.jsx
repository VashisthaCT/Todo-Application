import React from 'react';
import AppFromMf1 from 'mf1/App';
import AppFromMf2 from 'mf2/App';
import './style.css';
import Navbar from './navbar';

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="content">
        <header className="header">
          <h1>Todo App</h1>
        </header>
        <div className="content-top">
          <AppFromMf1 />
        </div>
        <div className="content-bottom">
          <AppFromMf2 />
        </div>
      </div>
    </div>
  );
};

export default App;