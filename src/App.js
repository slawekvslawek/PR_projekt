import React from 'react'
import './App.css';
import './index.css';
import Name from './components/Name.tsx';
import Move from './components/Move.tsx';
import Login from './components/Login.tsx';
import FormLogin from './components/FormLogin.tsx';
import FormRegist from './components/FormRegist.tsx';
import Detail from './components/Detail.tsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
  <Router>
        <div>
          <Switch>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/add">
             <Add />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

function Home() {
  return  <div className="container">
             <div className="App">
                  <Login />
             </div>
             <div className="content">
                  <Move /> <Move /> <Move /> <Move />
             </div>
             <div className="content2">
                  <Move /> <Move /> <Move /> <Move />
             </div>
           </div>
}

function Signin() {
  return <div> <h2>Signin</h2>;
  <div className='in'>
  <Name />
  <FormLogin />
    </div>
  </div>
}

function Signup() {
  return <div> <h2>Signup</h2>;
  <div className='in'>
  <Name />
  <FormRegist />
    </div>
  </div>
}

function Add() {
  return <div><h2>Add</h2>
   <div className='in'>
      <Name/>
        </div>
     </div>
}

function Details() {
  return <div> <h2>Details</h2>;
    <div className='in'>
      <Name/>
      <Detail />
        </div>
     </div>
}

export default App;