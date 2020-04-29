import React from "react";

function ImpTimer() {
  return (
    <div className="p3">
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

export default ImpTimer;
