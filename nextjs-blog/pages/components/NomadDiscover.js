import React from "react";

function NomadDiscover() {
  return (
    <div className="p1">
      <p>Nomad Discover</p>
      <img
        className="previewImage"
        src="/nomaddiscoverpic.png"
        alt="Nomad Discover app on Macbook and iPhone"
      />

      <style jsx>{`
        p {
          color: #f21d37;
          text-decoration: none;
          text-align: center;
          font-weight: bold;
          letter-spacing: 2px;
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

export default NomadDiscover;
