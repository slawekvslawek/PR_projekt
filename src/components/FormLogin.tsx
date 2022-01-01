import React from 'react'

const FormLogin = (props: any) => {
  return (
  <form>
    <div className="row mb-3">
     <label htmlFor="staticLogin" className="col-sm-2 col-form-label"><p className="text-danger">Login:</p></label>
      <div className="col-sm-10">
        <div className="w-75 p-3">
        <input type="Login"  className="form-control" id="Login"></input>
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
   <div className="col-12 text-center">
       <button type="submit" className="btn btn-primary">Zaloguj Się</button>
    </div>
  </form>

  );
}
export default FormLogin;