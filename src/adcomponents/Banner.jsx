import React, { useEffect, useRef } from "react";

const Banner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    window.atOptions = {
      key: "e75a7d49308cf810da37713720790391",
      format: "iframe",
      height: 90,
      width: 728,
      params: {},
    };

    const script = document.createElement("script");
    script.src = "//www.highperformanceformat.com/e75a7d49308cf810da37713720790391/invoke.js";
    script.async = true;

    if (adRef.current) adRef.current.appendChild(script);

    return () => {
      if (adRef.current && script.parentNode === adRef.current) {
        adRef.current.removeChild(script);
      }
      delete window.atOptions;
    };
  }, []);

  return (
    <div
      ref={adRef}
      className="ad-container"
      style={{
        width: "100%",
        maxWidth: "728px",
        height: "90px",
        margin: "1rem auto",
        overflow: "hidden",   // Hide overflow so scaled iframe doesn’t cause scroll
        position: "relative",
      }}
    />
  );
};

export default Banner;
