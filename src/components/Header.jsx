import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleLanguageClick = (langCode) => {
    navigate(`/?language=${langCode}`);
  };

  return (
    <header>
      <nav>
        <div className="logo">
          <img
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="search">
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button id="searchbtn" onClick={handleSearch}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M20.87 20.17L15.28 14.58C16.35 13.35 17 11.75 17 10C17 6.13 13.87 3 10 3C6.13 3 3 6.13 3 10C3 13.87 6.13 17 10 17C11.75 17 13.35 16.35 14.58 15.29L20.17 20.88L20.87 20.17ZM10 16C6.69 16 4 13.31 4 10C4 6.69 6.69 4 10 4C13.31 4 16 6.69 16 10C16 13.31 13.31 16 10 16Z"
                fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="categories">
          <button onClick={() => handleLanguageClick("hi")}>
            <span style={{ color: "white", margin: "10px" }}>Hindi</span>
          </button>
          <button onClick={() => handleLanguageClick("te")}>
            <span style={{ color: "white", margin: "10px" }}>Telugu</span>
          </button>
          <button onClick={() => handleLanguageClick("ta")}>
            <span style={{ color: "white", margin: "10px" }}>Tamil</span>
          </button>
          <button onClick={() => handleLanguageClick("kn")}>
            <span style={{ color: "white", margin: "10px" }}>Kannada</span>
          </button>
          <button onClick={() => handleLanguageClick("en")}>
            <span style={{ color: "white", margin: "10px" }}>English</span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
