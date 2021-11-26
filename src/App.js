import React from 'react'
import './App.css';
import './index.css';
import Search from './components/Search.tsx';
import Name from './components/TitleName.tsx';
import Move from './components/Move.tsx';
import Login from './components/Login.tsx';

function App() {
  return (
  <div className="container">
    <div className="App">
         <Name />
         <Search />
         <Login />
    </div>
    <div className="content">
         <Move /> <Move /> <Move /> <Move />
    </div>
    <div className="content2">
         <Move /> <Move /> <Move /> <Move />
    </div>
  </div>
  );
}

export default App;
