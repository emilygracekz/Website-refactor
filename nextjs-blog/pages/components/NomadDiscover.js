import React from "react";

function NomadDiscover() {
  return (
    <div>
      <p>Nomad Discover</p>
      <img
        className="previewImage"
        src="/nomaddiscoverpic.png"
        alt="Nomad Discover app on Macbook and iPhone"
      />

      <style jsx>{`
        p {
          color: var(--red);
          text-decoration: none;
          text-align: center;
          font-weight: normal;
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

export default NomadDiscover;
