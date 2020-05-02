import React from "react";
import styled from "styled-components";

export function NomadDiscover() {
  return (
    <StyledProjects>
      <div className="preview">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Nomad Discover app on Macbook and iPhone"
        />
        <div className="text">
          <a href="/">
            <h3>Nomad Discover</h3>
          </a>
          <p>
            An app to help digital nomads decide where to go next based off
            their preferences
          </p>
          <a href="/">VIEW ></a>
        </div>
      </div>
    </StyledProjects>
  );
}

export function ImpTimer() {
  return (
    <StyledProjects>
      <div className="preview">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Nomad Discover app on Macbook and iPhone"
        />
        <div className="text">
          <a href="/">
            <h3>Impromptu Timer</h3>
          </a>
          <p>A tool for college forensics compeitiors to practice speeches</p>
          <a href="/">VIEW ></a>
        </div>
      </div>
    </StyledProjects>
  );
}

export function CurrencyConverter() {
  return (
    <StyledProjects>
      <div className="preview">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Currency converter app on Macbook and iPhone"
        />
        <div className="text">
          <a href="/">
            <h3>Currency Converter</h3>
          </a>
          <p>An app that calls an API to convert one currency to another</p>
          <a href="/">VIEW ></a>
        </div>
      </div>
    </StyledProjects>
  );
}

export function Restock() {
  return (
    <StyledProjects>
      <div className="preview">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Restock logo"
        />
        <div className="text">
          <a href="/">
            <h3>ReStock</h3>
          </a>
          <p>
            Read about my experience working as a front end developer for
            ReStock
          </p>
          <a href="/">VIEW ></a>
        </div>
      </div>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  padding-top: 37px;

  h3 {
    color: var(--blue);
    font-weight: normal;
    letter-spacing: 0.5;
    text-decoration: none;
  }

  a {
    color: var(--blue);
    padding-top: 0px;
  }

  .previewImage:hover {
    transform: scale(1.1);
    transition: all 500ms;
  }

  a:hover {
    font-size: 17px;
    transition: all 500ms;
    font-size-adjust: 20px;
  }

  p {
    color: white;
    text-decoration: none;
    font-size: 20px;
  }

  .text {
    text-align: center;
  }

  .previewImage {
    max-width: 250px;
    border-radius: 5px;
  }

  @media (min-width: 750px) {
    .text {
      text-align: left;
    }

    h3 {
      letter-spacing: 0.5;
      font-size: 25px;
      margin-bottom: 0px;
      text-decoration: none;
    }

    p {
      font-size: 20px;
      max-width: 100%;
    }

    .previewImage {
      max-width: 300px;
    }
  }

  @media (min-width: 1100px) {
    .previewImage {
      max-width: 400px;
    }
  }
`;
