import React from "react";

function CurrencyConverter() {
  return (
    <div className="p3">
      <p>Currency Converter</p>
      <img
        className="previewImage"
        src="images/currencypic.png"
        alt="Currency converter app on Macbook and iPhone"
      />

      <style jsx>{`
        p {
          color: #f21d37;
          text-decoration: none;
          text-align: center;
          font-weight: bold;
        }

        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .previewImage {
          max-width: 300px;
        }
      `}</style>
    </div>
  );
}

export default CurrencyConverter;
