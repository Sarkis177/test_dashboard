import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListView from "./components/ListView/ListView";
import DetailView from "./components/DetailView/DetailView";
import usePosts from "./hooks/usePost";

const App = () => {
  const { posts } = usePosts();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListView posts={posts} />} />
        <Route path="/post/:id" element={<DetailView posts={posts} />} />
      </Routes>
    </Router>
  );
};

export default App;
