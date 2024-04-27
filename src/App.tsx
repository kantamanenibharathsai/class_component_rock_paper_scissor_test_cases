import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login_page/LoginPage';
import HomePage from './pages/home_page/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<HomePage />} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
