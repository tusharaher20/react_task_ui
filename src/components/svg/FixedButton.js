import React from "react";
import { Button } from "react-bootstrap";

function FixedButton({ variant }) {
  return (
    <div className={`fixed-button ${variant}`}>
      <Button
        variant="primary"
        className="d-flex align-items-center"
        style={{
          color: "white",
          borderRadius: "10px 10px 0px 0px ",
          background: "#292967",
          padding: "10px 15px",
        }}
      >
        <div
          style={{
            background: "#FDDF49",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            padding: "5px",
            marginRight: "8px",
          }}
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="svg-icon-college fixedbuttonsvg"
          >
            <path
              d="M2.03918 15.9988C1.94898 15.9753 1.85758 15.9552 1.76877 15.9277C1.15733 15.7388 0.743417 15.2056 0.740647 14.588C0.736257 13.6092 0.739323 12.6304 0.739317 11.6516C0.739296 8.26216 0.739089 4.87275 0.73949 1.48333C0.739575 0.770903 1.16464 0.220777 1.85465 0.0516119C1.99768 0.0165452 2.15025 0.00136751 2.29845 0.00122636C5.25827 -0.00161191 8.21809 -0.00173411 11.1779 -0.000394324C12.0943 2.14381e-05 12.7376 0.605739 12.7377 1.46703C12.7386 5.80922 12.7382 10.1514 12.7381 14.4936C12.738 15.2762 12.3113 15.7856 11.499 15.9754C11.478 15.9803 11.4585 15.9908 11.4383 15.9988C8.30524 15.9988 5.17221 15.9988 2.03918 15.9988ZM1.7481 14.3596C1.79978 14.315 1.83608 14.2858 1.86987 14.2542C3.95061 12.3095 6.03125 10.3648 8.11156 8.4197C8.3976 8.15226 8.39564 7.84297 8.10547 7.57164C6.02525 5.6265 3.94461 3.68176 1.86375 1.73722C1.83099 1.70661 1.7937 1.68025 1.7481 1.64351L1.7481 14.3596ZM11.7231 14.3716L11.7231 1.627C10.2928 2.9799 8.88605 4.31053 7.47171 5.64833C7.50279 5.67884 7.54325 5.72027 7.58562 5.75989C8.00249 6.14976 8.42128 6.53784 8.8364 6.92934C9.48725 7.54315 9.48659 8.45466 8.83639 9.06781C8.58574 9.30417 8.33236 9.53799 8.08069 9.77341C7.87318 9.96752 7.66636 10.1623 7.47026 10.3464C8.88605 11.6864 10.2924 13.0175 11.7231 14.3716ZM2.49693 15.0524L10.9784 15.0524C9.57425 13.7233 8.15821 12.383 6.73914 11.0399C5.3189 12.3832 3.90248 13.7229 2.49693 15.0524ZM10.9864 0.948391L2.51806 0.948391C3.91287 2.26944 5.32845 3.61015 6.75094 4.9574C8.16599 3.61801 9.57967 2.27992 10.9864 0.948391Z"
              fill="#292967"
            />
          </svg>
        </div>
        <span
          style={{
            color: "white",
            fontFamily: "Satoshi",
            fontSize: "16px",
            fontWeight: 700,
            lineHeight: "21.6px",
          }}
        >
          Enquire Now
        </span>
      </Button>
    </div>
  );
}

export default FixedButton;
