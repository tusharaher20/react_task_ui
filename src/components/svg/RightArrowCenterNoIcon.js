import React from "react";
import { Button } from "react-bootstrap";

function RightArrowCenterNoIcon({ variant }) {
  return (
    <div className={` d-flex justify-content-center text-center rightcenterbutton1   ${variant}`}>
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
          }}
          className="pt-0.5 pl-3 pr-3"
        >
          Enquire Now
        </span>
      </Button>
    </div>
  );
}

export default RightArrowCenterNoIcon;
