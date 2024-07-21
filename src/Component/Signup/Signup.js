import './Signup.css';
import  React from 'react';
import logo from '../../assets/logo.png'


const SignUp = () => {
return (
    <div className="signup-container">
      <img src={logo} alt="Logo" />
      <form className="signup-form" >
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
          
            
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            
          
          />
        </div>
        <button type="submit">Sign Up</button>
        <div className="login-link">
          <a href=""> <p>Already have an account?Login</p></a>
          
          
        </div>
      </form>
    </div>
  );
};

export default SignUp;

