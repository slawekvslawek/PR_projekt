import React from 'react'
import './App.css';
import './index.css';
import FormLogin from './components/FormLogin';
import FormRegist from './components/FormRegist';
import Detail from './components/Detail';
import Home from "./components/Home";
import AddMovie from "./components/AddMovie";
import { isExpired } from "react-jwt";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
       <BrowserRouter>
            <Switch>
              <Route path="/signin" component={FormLogin}/>
              <Route path="/signup" component={FormRegist}/>
                <Route path="/add"
                       render={props => {
                           if (isExpired(localStorage.getItem('token'))) {
                                    alert('Tylko zalogowani uzytkownicy moga dodawać nowe filmy.')
                               return <Redirect to="/" />;
                           }
                           return <AddMovie />;
                       }}
                />
              <Route path="/details/:id" component={Detail}/>
              <Route path="/" exact component={Home}/>
            </Switch>
       </BrowserRouter>
    );
  }

export default App;
