import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get('q') || '';
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!searchTerm) return;
    setLoading(true);

    fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}`)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching search results:', err);
        setLoading(false);
      });
  }, [searchTerm]);

  return (
    <>
    <Header/>
    <div style={{ padding: '2rem', width:'100vw', backgroundColor: '#121212', minHeight: '100vh', color: '#fff' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '1rem' }}>
        Search Results for: <em style={{ color: '#00bcd4' }}>{searchTerm}</em>
      </h2>

      {loading ? (
        <p>Loading...</p>
      ) : results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
          {results.map((movie) => (
            <div
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
              style={{
                width: '260px',
                backgroundColor: '#1e1e1e',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <img
                src={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.title}
                style={{ width: '100%', height: '300px', objectFit: 'cover' }}
              />
              <div style={{ padding: '0.5rem' }}>
                <h3 style={{ fontSize: '16px', margin: '0 0 0.5rem 0' }}>{movie.title}</h3>
                <p style={{ fontSize: '14px', color: '#ccc', margin: 0 }}>
                  {movie.release_date ? movie.release_date.slice(0, 4) : 'N/A'}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
}
