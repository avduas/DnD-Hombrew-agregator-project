import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const root = createRoot(document.getElementById('root'));
root.render(
  <App />
);