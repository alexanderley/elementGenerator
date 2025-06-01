import React from "react";
import "./Loading.css"; // Or use a CSS-in-JS approach if you prefer

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
