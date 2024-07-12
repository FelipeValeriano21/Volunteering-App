import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import './index.css';
import RegisterPage from './components/register/registerPage';
import LoginPage from './components/login/loginPage';

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Register" element={<RegisterPage />} />
        <Route path="/Login" element={<LoginPage/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
