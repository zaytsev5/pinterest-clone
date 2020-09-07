import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigator from './components/Navigator'
import SearchBar from './components/SearchBar'
import MenuBar from './components/MenuBar'

function App() {
  return (
  <div className='container'>
    <div className='menu_bar'>
      <MenuBar />
    </div>
    <div className="search_bar">
      <SearchBar />
    </div>
    <div className="navigator pull-right">
      <Navigator />
    </div>
  </div>
  );
}

export default App;
