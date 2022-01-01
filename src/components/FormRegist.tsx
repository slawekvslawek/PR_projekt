import React from 'react'

const FormRegist = (props: any) => {
  return (
  <form>
      <div className="row mb-3">
      <div className="mb-3 row">
       <label htmlFor="staticLogin" className="col-sm-2 col-form-label"><p className="text-danger">Login:</p></label>
        <div className="col-sm-10">
          <div className="w-75 p-3">
          <input type="Login"  className="form-control" id="Login"></input>
          </div>
        </div>
        </div>
         <div className="mb-3 row">
        <label htmlFor="staticName" className="col-sm-2 col-form-label"><p className="text-danger">Name:</p></label>
        <div className="col-sm-10">
         <div className="w-75 p-3">
        <input type="Name"  className="form-control" id="Name"></input>
        </div>
        </div>
        </div>
        <div className="mb-3 row">
        <label htmlFor="staticName" className="col-sm-2 col-form-label"><p className="text-danger">Email:</p></label>
        <div className="col-sm-10">
        <div className="w-75 p-3">
        <input type="email" className="form-control" id="inputEmail3"></input>
        </div>
        </div>
        </div>
        <div className="row mb-3">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label"><p className="text-danger">Password:</p></label>
        <div className="col-sm-10">
        <div className="w-75 p-3">
        <input type="password" className="form-control" id="inputPassword"></input>
        </div>
        </div>
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">Zarejestruj Się</button>
        </div>
      </div>
  </form>

  );
}
export default FormRegist;