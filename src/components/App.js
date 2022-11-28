import React from 'react';
import { Routes, Route } from "react-router-dom";
import Search from "./search/Search";
import PrivateRoute from "./privateRoute/PrivateRoute";
import PatNotFound from './pathNotFound/PathNotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/user/:username" element={<PrivateRoute />} />      
      <Route path="*" element={<PatNotFound />}
      />
    </Routes>
  );
};

export default App;
