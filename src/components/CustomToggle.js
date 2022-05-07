import React from "react";

const DonateBtn = ({ children, individual, organization, mode }) => {
  return (
    <>
      {individual ? (
        <a
          href={
            mode === "Card"
              ? "https://rb.gy/hs7cqv"
              : mode === "Bank"
              ? "uri"
              : mode === "Crypto"
              ? "https://rb.gy/1qamz5"
              : !children
              ? "https://rb.gy/hs7cqv"
              : null
          }
          className="donate-btn"
        >
          {!children ? "Card" : children} <i className="fas fa-arrow-right" />
        </a>
      ) : organization ? (
        <a
          href={
            mode === "Card"
              ? "https://rb.gy/kvlvnr"
              : mode === "Bank"
              ? "uri"
              : mode === "Crypto"
              ? "uri"
              : !children
              ? "https://rb.gy/kvlvnr"
              : null
          }
          className="donate-btn"
        >
          {!children ? "Card" : children} <i className="fas fa-arrow-right" />
        </a>
      ) : (
        <a
          href={
            mode === "Card"
              ? "https://paystack.com/pay/hubswitch"
              : mode === "Bank"
              ? "uri"
              : mode === "Crypto"
              ? ""
              : !children
              ? "https://paystack.com/pay/hubswitch"
              : null
          }
          className="donate-btn"
        >
          {!children ? "Card" : children} <i className="fas fa-arrow-right" />
        </a>
      )}
    </>
  );
};

export default DonateBtn;
