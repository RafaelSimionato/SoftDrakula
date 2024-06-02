import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './Routes';  // Adjust this import if needed
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppRoutes />);
