import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoDetails from "./components/PhotoDetails";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo/:id" element={<PhotoDetails />} />
    </Routes>
  );
};

export default App;
