import React from "react";

function Button(props) {
  const { name, color } = props;
  return (
    <button
      type="submit"
      style={{
        backgroundColor: color,
        border: "none",
        color: "#fff",
        fontSize: "1.5rem",
        padding: "1rem 1.5rem",
        borderRadius: "50px",
        cursor: "pointer",
      }}
    >
      {name}
    </button>
  );
}

export default Button;
