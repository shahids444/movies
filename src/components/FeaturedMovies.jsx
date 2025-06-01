import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";

const API_KEY = "2328d0fc2b851f9fc3743b401ffe4fd3";
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE = "https://image.tmdb.org/t/p/w342";

export default function FeaturedMovies() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const language = queryParams.get("language");

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [language]);

  useEffect(() => {
    fetchMovies(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, language]);

  async function fetchMovies(pageNum) {
    setLoading(true);
    try {
      const endpoint = `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${pageNum}${
        language ? `&with_original_language=${language}` : ""
      }`;

      const res = await fetch(endpoint);
      const data = await res.json();
      setMovies((prev) => [...prev, ...data.results]);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  }

  function handleScroll() {
    const container = containerRef.current;
    if (!container) return;
    if (
      container.scrollWidth - container.scrollLeft - container.clientWidth <
        200 &&
      !loading
    ) {
      setPage((prev) => prev + 1);
    }
  }

  function handleClick(movieId) {
    navigate(`/movie/${movieId}`);
  }

  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
        {language
          ? `Popular Movies (${language.toUpperCase()})`
          : "Popular Movies"}
      </h1>
      <div
        ref={containerRef}
        onScroll={handleScroll}
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "1rem",
          padding: "1rem",
          scrollBehavior: "smooth",
          flexWrap: "wrap",
          userSelect: "none",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => handleClick(movie.id)}
            style={{
              flex: "0 0 auto",
              width: "280px",
              cursor: "pointer",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
              backgroundColor: "#121212",
              color: "#eee",
              transition: "transform 0.3s",
              display: "flex",
              flexDirection: "column",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 24px rgba(0,0,0,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(0,0,0,0.5)";
            }}
          >
            {movie.poster_path ? (
              <img
                src={`${IMAGE_BASE}${movie.poster_path}`}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "330px",
                  objectFit: "cover",
                  borderRadius: "12px 12px 0 0",
                }}
              />
            ) : (
              <div
                style={{
                  width: "100%",
                  height: "330px",
                  backgroundColor: "#333",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                  color: "#999",
                }}
              >
                No Image
              </div>
            )}
            <div
              style={{
                padding: "0.75rem 1rem",
                width: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "1.1rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {movie.title}
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#bbb",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: "vertical",
                }}
                title={movie.overview}
              >
                {movie.overview || "No description available."}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div
            style={{
              flex: "0 0 auto",
              width: "220px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#888",
            }}
          >
            Loading...
          </div>
        )}
      </div>
    </>
  );
}
