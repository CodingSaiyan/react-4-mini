import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/"><h3>Route1</h3></Link>
          <Link to="/2"><h3>Route2</h3></Link>
          <Link to="/3"><h3>Route3</h3></Link>

          {routes}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div>
    );
  }
}

export default App;
