import React from 'react'
import { Link } from 'react-router-dom';
import Name from './Name';

const Login = (props: any) => {
  return (
   <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand"><Name /></a>
          <form className="d-flex">
          <input className="form-control me-5" type="search" placeholder="Search for a move..." aria-label="Search"></input>
          </form>
          <Link to="/signin"><button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-4" >Zaloguj</button></Link>
          <Link to="/signup"><button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-4" >Zarejestruj</button></Link>
          <Link to="/add"><button className="btn btn-outline-success btn-dark my-3 my-sm-0 me-4">Dodaj film</button></Link>
   </nav>
  );
}
export default Login;