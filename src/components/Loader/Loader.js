import React, { useState, useEffect } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  return loading ? (
    <div id="loader-overlay">
      <div className="loader">
        <div className="loader-inner"></div>
      </div>
    </div>
  ) : (
    children
  );
};

export default Loader;
