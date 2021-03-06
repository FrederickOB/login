import React from 'react';
//import ReactDOM from 'react-dom';
import ForgotPassword from './ForgotPassword';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {

  state = { onClickPage:false};

  const _onClickPage = (bool) =>{
    this.setState({
      onClickPage: bool,
    });
  }

   onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos',{
      params:{query: term},
    });
      this.setState({ images: response.data.results});
  }

  render(){

    this.state.onClickPage{
      return <ForgotPassword  />
    }

    return (
        <div className="login-box">
          <div className="card">
            <div className="card-body login-card-body">
              <h1 className="login-box-msg">Sign in</h1>
                <div className="input-group mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" className="form-control" placeholder="Password" />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                  </div>
                </div>
              <p className="mb-1">
                <a href="#" onClick={this._onClickPage.bind(true)}>I have forgotten my password.</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">Register a new membership</a>
              </p>
            </div>
          </div>
        </div>
      );}
};

export default App;
