import React from "react";

function Restock() {
  return (
    <div>
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
          letter-spacing: 2px;
          font-size: 20px;
        }

        .previewImage {
          max-width: 290px;
        }

        @media (min-width: 700px) {
          p {
            font-size: 30px;
          }
        }

        @media (max-width: 900px) {
          .previewImage {
          max-width: 250px;
        }

        .p {
          letter-spacing: none;
        }
      }
      `}</style>
    </div>
  );
}

export default Restock;
