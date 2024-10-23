// AuthRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../Pages/LoginPage.jsx';
import DashBoardView from '../Views/DashboardView/DashBoardV/DashBoardView.jsx';

function AuthRoutes() {
  return (
    <Routes>
      {/* Route par défaut  */}
      <Route path='/' element={<LoginPage/>}/>
      {/* Route de login */}
      <Route path="/login" element={<LoginPage />}/>
      {/* Route vers le dashboard après connexion */}
      <Route path="/dashboard/*" element={<DashBoardView />} />
    </Routes>
  );
}

export default AuthRoutes;
