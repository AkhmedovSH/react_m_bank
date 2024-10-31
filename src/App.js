import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Index from "./routes/index"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/auth.css'
import 'assets/css/style.css'
import 'assets/css/variables.css'

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
