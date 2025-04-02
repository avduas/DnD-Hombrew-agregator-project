import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './pages(WIP)/App';
import './i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);