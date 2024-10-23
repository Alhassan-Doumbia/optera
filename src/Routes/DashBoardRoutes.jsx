// DashboardRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OverView from '../Views/OverView/OverView';
import StatView from '../Views/StatsView/StatView';

function DashboardRoutes() {
  return (
    <Routes>
      {/* route outlet par défaut  */}
      <Route path="/" element={<OverView />} />
      {/* Route vers la vue d'ensemble */}
      <Route path="/overview" element={<OverView />} />
      {/* Route vers les statistiques */}
      <Route path="/stats" element={<StatView />} />
    </Routes>
  );
}

export default DashboardRoutes;
