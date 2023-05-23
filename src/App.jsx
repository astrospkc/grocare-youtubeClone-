import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Homepage from "./components/Homepage";
import Datacontext from "./context/Datacontext";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoPage from "./components/VideoPage";

function App() {
  return (
    <>
      <Router>
        <Datacontext>
          <Routes>
            <Route path="*" element={<Homepage />} />
          </Routes>
        </Datacontext>
        <Footer />
      </Router>
    </>
  );
}

export default App;
