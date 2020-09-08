import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.scss'
import Navigator from './components/Navigator'
import SearchBar from './components/SearchBar'
import MenuBar from './components/MenuBar'
import ListItem from './components/ListItem'

function App() {
  return (
  <div className='header'>
    <div className='menu_bar'>
      <MenuBar />
    </div>
    <div className="search_bar">
      <SearchBar />
    </div>
    <div className="navigator pull-right">
      <Navigator />
    </div>
    <ListItem />
  </div>
  );
}

export default App;
