import React from "react";
import { Button } from "react-bootstrap";

function Class() {
  return (
    <div className="text-center pt-8 d-flex justify-content-center">
      <Button
        variant="primary"
        className="d-flex pl-2 p-10"
        style={{
          borderRadius: "27px",
          background: "#FDDF49",
          padding: "    padding: 10px 15px 10px 16px;",
        }}
      >
        <span
          style={{
            color: "black",
            fontFamily: "Satoshi",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "21.6px",
            marginRight: "5px",
          }}
          className="pt-0.5 pr-3"
        >
          Enquire Now
        </span>
        <div
          style={{
            background: "#292967",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            padding: "5px", // Adjust padding as needed
            height: "27px",
          }}
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon-college"
            style={{ marginLeft: "0px", color: "black" }} // Add margin to separate from text
          >
            <path
              d="M15.8796 8.43709C16.2701 8.04656 16.2701 7.4134 15.8796 7.02287L9.51566 0.658913C9.12513 0.268388 8.49197 0.268388 8.10144 0.658913C7.71092 1.04944 7.71092 1.6826 8.10144 2.07313L13.7583 7.72998L8.10144 13.3868C7.71092 13.7774 7.71092 14.4105 8.10144 14.801C8.49197 15.1916 9.12513 15.1916 9.51566 14.801L15.8796 8.43709ZM0.705322 8.72998H15.1725V6.72998H0.705322V8.72998Z"
              fill="#FDDF49"
            />
          </svg>
        </div>
      </Button>
    </div>
  );
}

export default Class;
