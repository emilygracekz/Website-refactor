import React from "react";

function Restock() {
  return (
    <div className="p3">
      <p>ReStock</p>
      <img
        className="previewImage"
        src="images/app_logo.png"
        alt="Restock logo"
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
          max-width: 200px;
        }
      `}</style>
    </div>
  );
}

export default Restock;
