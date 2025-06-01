import React, { useEffect } from "react";

const SocialBar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//pl26811484.profitableratecpm.com/81/71/0b/81710b17a5c66bdaf85e4ec1e842bcf7.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible JSX needed; the script manages its own rendering
};

export default SocialBar;
