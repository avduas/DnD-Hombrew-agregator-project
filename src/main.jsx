import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import App from './main page/App';
import AuthorPage from "./pages(WIP)/authorPage";
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css'
import './main.css';
import { BrowserRouter, Route, Routes } from "react-router";
import Forum from "./pages(WIP)/forum";
import Profile from "./pages(WIP)/userPage";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/addCampaign" element= {<AuthorPage />} />
      <Route path="/forum" element = {<Forum />}/>
      <Route path="/profile" element= {<Profile />} />
      {/* <Route path="/"></Route> */}
    </Routes>
  </BrowserRouter>
);