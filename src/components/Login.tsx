import React from 'react'
import { Link } from 'react-router-dom';
import { isExpired, decodeToken  } from "react-jwt";
import Name from './Name';

const Login = () => {

    const user:any = decodeToken(localStorage.getItem('token') || '{}');
    const isNotLogged:any = isExpired(localStorage.getItem('token') || '{}');

    return (
      <div className="container">
      <div className="App">
       <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand"><Name /></a>
              {isNotLogged &&
              <Link to="/signin"><button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-5" >Zaloguj</button></Link>}
              {isNotLogged &&
              <Link to="/signup"><button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-5" >Zarejestruj</button></Link>}
              <Link to="/add"><button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-5">Dodaj film</button></Link>
              {!isNotLogged &&
              <Link to="/"><button className="btn btn-danger my-3 my-sm-0 me-5"
              onClick={() => localStorage.removeItem('token')}>Wyloguj</button></Link>}
       </nav>
       <div className='zalogowany'>
       {user && <h4 style={{float: 'left'}}>Jestes zalogowany jako:<br/> {user.name}</h4>}
       </div>
       </div>
       </div>
    );
}
export default Login;
