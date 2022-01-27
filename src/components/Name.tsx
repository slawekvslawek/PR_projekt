import React from 'react'
import { Link } from 'react-router-dom';

const Name = () => {
  return (
    <Link to="/" style={{ textDecoration: 'none' }}><p className="h1">Baza Filmów</p></Link>
  );
}
export default Name;