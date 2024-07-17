import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogGrid from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogGrid />} />
        <Route path="/blog/:id" element={<BlogPostDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
