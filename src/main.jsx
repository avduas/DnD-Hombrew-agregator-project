import React, { useState } from "react";
import { createRoot } from 'react-dom/client';
import App from './main page/App';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css';
import { BrowserRouter } from "react-router-dom";

const RootApp = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <App user={user} setUser={setUser} />
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById('root'));
root.render(<RootApp />);
