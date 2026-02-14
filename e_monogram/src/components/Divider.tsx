import React from "react";
import divider from "../assets/divider.svg";

const Divider: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 0",
      }}
    >
      <img src={divider} alt="divider" />
    </div>
  );
};

export default Divider;
