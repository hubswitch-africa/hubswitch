import React from "react";

const DonateBtn = ({ children, individual, organization, mode }) => {
  return (
    <>
      {individual ? (
        <a
          href={
            mode === "Card"
              ? "https://paystack.com/pay/hubswitch"
              : mode === "Bank"
              ? "uri"
              : mode === "Crypto"
              ? "uri"
              : !children
              ? "https://paystack.com/pay/hubswitch"
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
              ? "https://paystack.com/pay/hubswitchorg"
              : mode === "Bank"
              ? "uri"
              : mode === "Crypto"
              ? "uri"
              : !children
              ? "https://paystack.com/pay/hubswitchorg"
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
              ? "uri"
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
