import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';
import './css/App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home/>} />
        {/* Movie Detail Page */}
        <Route path="movie/:id" element={<MovieDetail/>} />
      </Routes>
    </Router>
  );
}

export default App;
