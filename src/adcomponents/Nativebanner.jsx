import React, { useEffect, useRef } from "react";

const Nativebanner = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26811879.profitableratecpm.com/85229d76d4ae4fbdecae6f9cc1fc7b99/invoke.js";
    script.async = true;
    script.setAttribute("data-cfasync", "false");

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    return () => {
      if (adRef.current) {
        adRef.current.innerHTML = ""; // Clean up ad when component unmounts
      }
    };
  }, []);

  return (
    <div
      id="container-85229d76d4ae4fbdecae6f9cc1fc7b99"
      ref={adRef}
      className="nativebanner-ad"
    />
  );
};

export default Nativebanner;
