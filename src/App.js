import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/ui/Dashboard';
import SignIn from './components/routes/SignIn';
import SignUp from './components/routes/SignUp';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/SignIn" element={<SignIn/>} />
              <Route path="/SignUp" element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
