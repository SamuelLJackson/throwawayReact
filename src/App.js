import React from 'react';
import './App.css';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './modules/store'
import ContentArea from './pages/ContentArea'
import {BrowserRouter} from 'react-router-dom'
import Header from './pages/Header'

const reduxStore = configureStore(window.REDUX_INITIAL_DATA)

function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <BrowserRouter>
        <div className="mainContainer">
            <Header />
            <ContentArea />
        </div>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
