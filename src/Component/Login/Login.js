import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom'



const LoginForm = () => {


  return (
    <div className="login-form-container">
      <form className="login-form" >
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            
          />
        </div>
        <button type="submit">Login</button>
       <a href=""> <p>Don't have an account? Signup</p></a>
      </form>
    </div>
  );
};

export default LoginForm;



        