import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './modules/store'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ReduxProvider>
  );
}

export default App;
