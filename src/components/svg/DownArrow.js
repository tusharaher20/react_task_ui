import React from "react";

function Class() {
  return (
    <div className="outer-container-college">
      {" "}
      {/* Apply styles for circular shape */}
      <div className="h-downarrow" style={{ background: "#FDDF49" }}>
        <svg
          width="16"
          height="21"
          viewBox="0 0 16 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="svg-icon-college" // Apply styles for centering
        >
          <path
            d="M8.81812 1.89502C8.81812 1.34273 8.3704 0.89502 7.81812 0.89502C7.26583 0.89502 6.81812 1.34273 6.81812 1.89502L8.81812 1.89502ZM7.11101 20.1012C7.50153 20.4917 8.1347 20.4917 8.52522 20.1012L14.8892 13.7372C15.2797 13.3467 15.2797 12.7136 14.8892 12.323C14.4987 11.9325 13.8655 11.9325 13.475 12.323L7.81812 17.9799L2.16126 12.323C1.77074 11.9325 1.13757 11.9325 0.747048 12.323C0.356524 12.7136 0.356524 13.3467 0.747048 13.7372L7.11101 20.1012ZM6.81812 1.89502L6.81812 19.3941L8.81812 19.3941L8.81812 1.89502L6.81812 1.89502Z"
            fill="#292967"
          />
        </svg>
      </div>
    </div>
  );
}

export default Class;
