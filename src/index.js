import React from 'react';
import ReactDOM from 'react-dom';

// dependencies
import { BrowserRouter } from 'react-router-dom'

// css
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// components
import Routes from './routes';
import reportWebVitals from './reportWebVitals';

// css
import './index.css'

ReactDOM.render(
  <React.Fragment>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </React.Fragment>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
