import React from "react";

function ImpTimer() {
  return (
    <div>
      <p>Impromptu Timer</p>
      <img 
        className="previewImage"
        src="images/imptimer.png"
        alt="Nomad Discover app on Macbook and iPhone"
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
          max-width: 500px;
        }

        @media (min-width: 700px) {
          p {
            font-size: 30px;
          }
        }

        @media (max-width: 900px) {
          .previewImage {
          max-width: 300px;
        }

        .p {
          letter-spacing: none;
        }
      }
      `}</style>
    </div>
  );
}

export default ImpTimer;
