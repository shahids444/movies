import React, { useEffect, useRef } from "react";

const Popunder = () => {
  const adRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26811484.profitableratecpm.com/81/71/0b/81710b17a5c66bdaf85e4ec1e842bcf7.js";
    script.async = true;

    if (adRef.current) {
      adRef.current.appendChild(script);
    }

    return () => {
      if (adRef.current && adRef.current.contains(script)) {
        adRef.current.removeChild(script);
      }
    };
  }, []);

  return <div ref={adRef} className="profit-ad-container"></div>;
};

export default Popunder;
