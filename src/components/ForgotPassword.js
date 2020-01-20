import React from 'react';

const ForgotPassword =() => {

  return (
    <div className="login-box">

      <div className="card">
        <div className="card-body login-card-body">
          <p className="login-box-msg">You forgot your password? Here you can easily retrieve another password.</p>

          <form action="recover-password.html" method="post">
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-envelope"></span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn btn-primary btn-block">Request anoter password</button>
              </div>

              //.col //
            </div>
          </form>

          <p className="mt-3 mb-1">
            //<a href="App.js">Login</a>
          </p>
          <p className="mb-0">
            <a href="register.html" className="text-center">Register another membership</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
