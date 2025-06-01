import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Movie from './components/Movie';
import SearchResults from './components/SearchResults';
import FeaturedMovies from './components/FeaturedMovies';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeaturedMovies />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </Router>
  );
}