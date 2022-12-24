import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Hello, All!</h1>
        <p>Welcome to our new single-page application, built with: REACT and .NET 6</p>
        
        <p>Create Account <Link to="/register-user">Here</Link></p>
      </div>
    );
  }
}
