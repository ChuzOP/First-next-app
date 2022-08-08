import React from "react";

const LightLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3 className="title">Light Layout</h3>
      <div className="container">{children}</div>
    </div>
  );
};

export default LightLayout;
