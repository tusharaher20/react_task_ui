import React from "react";
import { Button } from "react-bootstrap";

function RightArrowCenter({ variant }) {
  return (
    <div className={` d-flex justify-content-center text-center rightcenterbutton   ${variant}`}>
      <Button
        variant="primary"
        className="d-flex pl-2 p-10"
        style={{
          color: "white",
          borderRadius: "27px",
          background: "#292967",
          padding: "10px 15px 10px 16px;",
        }}
      >
        <span
          style={{
            color: "white",
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
            background: "#FDDF49",
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
              d="M15.8703 8.57356C16.2609 8.18304 16.2609 7.54987 15.8703 7.15935L9.50638 0.795387C9.11586 0.404863 8.48269 0.404863 8.09217 0.795387C7.70164 1.18591 7.70164 1.81908 8.09217 2.2096L13.749 7.86646L8.09217 13.5233C7.70164 13.9138 7.70164 14.547 8.09217 14.9375C8.48269 15.328 9.11586 15.328 9.50638 14.9375L15.8703 8.57356ZM0.696045 8.86646H15.1632V6.86646H0.696045V8.86646Z"
              fill="#292967"
            />
          </svg>
        </div>
      </Button>
    </div>
  );
}

export default RightArrowCenter;
