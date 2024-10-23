import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import Playground from './Playground.jsx';
import DashBoardView from './Views/DashboardView/DashBoardV/DashBoardView.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Router>
            <App />
        </Router>
      {/* <Playground/> */}
      {/* <DashBoardView></DashBoardView> */}
      
    </StrictMode>,
);
