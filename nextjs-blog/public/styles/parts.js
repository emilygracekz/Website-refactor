import React from "react";
import styled from "styled-components";

export function NomadDiscover() {
  return (
    <StyledProjects>
      <div className="text">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Nomad Discover app on Macbook and iPhone"
        />
        <h3>Nomad Discover</h3>
        <p>An app to help digital nomads decide where to go next</p>
        <a href="/">VIEW ></a>
      </div>
    </StyledProjects>
  );
}

export function ImpTimer() {
  return (
    <StyledProjects>
      <div className="text">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Nomad Discover app on Macbook and iPhone"
        />
        <h3>Impromptu Timer</h3>
        <p>A tool for college forensics compeitiors to practice speeches</p>
        <a href="/">VIEW ></a>
      </div>
    </StyledProjects>
  );
}

export function CurrencyConverter() {
  return (
    <StyledProjects>
      <div className="text">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Currency converter app on Macbook and iPhone"
        />
        <h3>Currency Converter</h3>
        <p>An app that calls an API to convert one currency to another</p>
        <a href="/">VIEW ></a>
      </div>
    </StyledProjects>
  );
}

export function Restock() {
  return (
    <StyledProjects>
      <div className="text">
        <img
          className="previewImage"
          src="images/hold.png"
          alt="Restock logo"
        />
        <h3>ReStock</h3>
        <p>Read about my experience working as a front end developer for ReStock</p>
        <a href="/">VIEW ></a>
      </div>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  padding-top: 37px;

  h3 {
    color: var(--green);
    font-weight: bold;
    letter-spacing: .5;
  }

  a {
    color: var(--blue);
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
    color: var(--blue);
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
      text-align: center;
    }

    h3 {
      letter-spacing: .5;
      font-size: 25px;
      margin-bottom: 0px;
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
`