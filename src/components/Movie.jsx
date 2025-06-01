import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// const API_KEY = "2328d0fc2b851f9fc3743b401ffe4fd3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_LARGE = "https://image.tmdb.org/t/p/w780";
const IMAGE_BASE_SMALL = "https://image.tmdb.org/t/p/w185";

export default function Movie() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [cast, setCast] = useState([]);
  const [torrents, setTorrents] = useState([]);
  const [loadingTorrents, setLoadingTorrents] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie();
    fetchVideos();
    fetchCast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function fetchMovie() {
    try {
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`);
      const data = await res.json();
      setMovie(data);
      fetchTorrents(data.title);
    } catch (err) {
      console.error("Failed to fetch movie details:", err);
    }
  }

  async function fetchVideos() {
    try {
      const res = await fetch(`${BASE_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      const data = await res.json();
      setVideos(data.results || []);
    } catch (err) {
      console.error("Failed to fetch videos:", err);
    }
  }

  async function fetchCast() {
    try {
      const res = await fetch(`${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`);
      const data = await res.json();
      setCast(data.cast || []);
    } catch (err) {
      console.error("Failed to fetch cast:", err);
    }
  }

  async function fetchTorrents(name) {
    try {
      setLoadingTorrents(true);
      const res = await fetch(`https://moviesbackend-mkeq.onrender.com/api/torrents/${encodeURIComponent(name)}`);
      const data = await res.json();
      setTorrents(data);
    } catch (err) {
      console.error("Failed to fetch torrents:", err);
      setTorrents([]);
    } finally {
      setLoadingTorrents(false);
    }
  }

  if (!movie) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Loading movie details...</p>;

  // Find the official trailer from videos
  const trailer = videos.find(
    (vid) =>
      vid.type === "Trailer" &&
      vid.site === "YouTube" &&
      (vid.official || true) // fallback to any trailer
  );

  return (
    <div
      style={{
        minWidth:"99vw",
        margin: "2rem auto",
        backgroundColor: "#1c1c1c",
        padding: "2rem",
        borderRadius: "16px",
        color: "#eee",
        boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        maxWidth: "900px",
      }}
    >
      <button
        onClick={() => navigate(-1)}
        style={{
          position: "fixed",
          top: "1rem",
          left: "1rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#00bcd4",
          border: "none",
          borderRadius: "8px",
          color: "#121212",
          fontWeight: "bold",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        ← Back
      </button>

      <img
        src={
          movie.backdrop_path
            ? `${IMAGE_BASE_LARGE}${movie.backdrop_path}`
            : movie.poster_path
            ? `${IMAGE_BASE_LARGE}${movie.poster_path}`
            : ""
        }
        alt={movie.title}
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "fill",
          borderRadius: "12px",
          boxShadow: "0 6px 20px rgba(0,0,0,0.5)",
        }}
      />

      <div style={{ padding: "0 1rem" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{movie.title}</h1>
        {movie.tagline && <p style={{ fontStyle: "italic", color: "#ccc", marginBottom: "1.5rem" }}>"{movie.tagline}"</p>}

        <p style={{ fontSize: "1.2rem", lineHeight: "1.6" }}>
          {movie.overview || "No detailed overview available."}
        </p>

        {/* Embed trailer video */}
        {trailer && (
          <div style={{ marginTop: "2rem" }}>
            <h2>Trailer</h2>
            <iframe
              title="movie-trailer"
              width="100%"
              height="600"
              id="iframe"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "12px", boxShadow: "0 6px 20px rgba(0,0,0,0.5)" }}
            />
          </div>
        )}

        {/* Cast Section */}
        {cast.length > 0 && (
          <div style={{ marginTop: "2rem" }}>
            <h2>Cast</h2>
            <div
              style={{
                display: "flex",
                flexWrap:"wrap",
                gap: "1rem",
                overflowX: "auto",
                paddingBottom: "1rem",
              }}
            >
              {cast.slice(0, 12).map((actor) => (
                <div
                  key={actor.cast_id || actor.credit_id}
                  style={{
                    minWidth: "120px",
                    textAlign: "center",
                    color: "#ddd",
                  }}
                >
                  <img
                    src={
                      actor.profile_path
                        ? `${IMAGE_BASE_SMALL}${actor.profile_path}`
                        : "https://via.placeholder.com/120x180?text=No+Image"
                    }
                    alt={actor.name}
                    style={{
                      width: "100%",
                      borderRadius: "12px",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <p style={{ fontWeight: "bold", fontSize: "1rem", margin: 0 }}>
                    {actor.name}
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#aaa", margin: 0 }}>
                    as {actor.character}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <hr style={{ borderColor: "#444", margin: "2rem 0" }} />

        {/* Torrent Results Section */}
        <div>
          <h2 style={{ marginBottom: "1rem" }}>Download Links</h2>

          {loadingTorrents ? (
            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <div
                style={{
                  border: "4px solid #ccc",
                  borderTop: "4px solid #00bcd4",
                  borderRadius: "50%",
                  width: "36px",
                  height: "36px",
                  animation: "spin 1s linear infinite",
                }}
              />
              <span style={{ margin: "10px", fontWeight: "bold", marginTop: "3px" }}>Loading...</span>
            </div>
          ) : torrents.length > 0 ? (
            <>
             <ul
  style={{
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    maxWidth: "100%", // prevents overflow
    boxSizing: "border-box"
  }}
>
  {torrents.map((torrent, index) => (
    <li
      key={index}
      style={{
        marginBottom: "1rem",
        padding: "1rem",
        width: "100%",
        maxWidth: "100%", // keep it within viewport
        boxSizing: "border-box",
        backgroundColor: "#333",
        borderRadius: "8px",
        wordBreak: "break-word", // helps magnet links not overflow
      }}
    >
                    <strong>{torrent.title}</strong> <br />
                    Size: {torrent.size} | Seeds: {torrent.seeds} | Peers: {torrent.peers} <br />
                   <a
  href={torrent.magnet}
  style={{
    display: "inline-block",
    marginTop: "0.5rem",
    padding: "0.75rem 1rem",
    backgroundColor: "#00bcd4",
    userSelect:"none",
    color: "#121212",
    borderRadius: "6px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "1rem",
    maxWidth: "100%",
    wordBreak: "break-word",
  }}
  rel="noopener noreferrer"
>
  Download Torrent
</a>
                  </li>
                ))}
              </ul>
              <p>Make sure that torrent downloader is installed or copy the magnet link</p>
            </>
          ) : (
            <p>No torrents found for this movie.</p>
          )}
        </div>
      </div>

      {/* Spinner keyframe styles */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}
