import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './css/custom.css';
import Home from './home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom';
import Publish from './publish';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/publish' element={<Publish />} />
            </Routes>
    </Router>

   


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
