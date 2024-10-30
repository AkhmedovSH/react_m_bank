import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Index from "./routes/index"

function App() {
  return (
    <Router>
      <Index />
    </Router>
  );
}

export default App;
