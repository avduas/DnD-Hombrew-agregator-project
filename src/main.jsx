import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './main page/App';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <>
  <App />
  </>
);