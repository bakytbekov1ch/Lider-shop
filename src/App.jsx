import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import NewPage from "./pages/NewPage";
import Category from "./pages/Category";
import Loit from "./pages/Loit";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/loit" element={<Loit />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
