import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import TimeLine from './components/timeline';
import About from './components/about';
import GitHub from './components/github';
import GithubGroup from './components/githubGroup';
import './css/custom.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GithubGroup></GithubGroup>
    <GitHub title={'moreligma'} repoUrl={'https://github.com/brycenatter/wordleGamePython'} text={'ligma af'}language={'Java'}></GitHub>
    <About></About>
    <TimeLine></TimeLine>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
