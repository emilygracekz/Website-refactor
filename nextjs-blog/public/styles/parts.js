import React from "react";
import styled from "styled-components";

export function NomadDiscover() {
  return (
    <StyledProjects>
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/squarenomad.png"
            alt="Nomad Discover app on Macbook and iPhone"
          />
        </div>
        <div className="text">
          <h3>Nomad Discover</h3>
          <p>
            An app that suggests where digital nomads should go next. Nomad
            Discover takes criteria like budget and weather to suggest a place
            for nomads to go based off data from Nomad List.
          </p>
          <div className="links">
            <div className="repo">
              <a href="https://github.com/emilygracekz/nomadDiscover">
                VIEW REPO
              </a>
            </div>
            <div className="liveSite">
              <a href="">LIVE SITE</a>
            </div>
          </div>
          <div className="stack">
            <img src="images/baselogos.png" className="stackImage"></img>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

export function ImpTimer() {
  return (
    <StyledProjects>
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/squarenomad.png"
            alt="Nomad Discover app on Macbook and iPhone"
          />
        </div>
        <div className="text">
          <h3>Impromptu Timer</h3>
          <p>
            A tool for college forensics competitors to practice speeches. This
            timer counts down from seven minutes and provides a random quotation
            when the start button is pressed.
          </p>
        </div>
        <div className="stack">
          <img src="images/baselogos.png" className="stackImage"></img>
        </div>
        <div className="links">
          <div className="repo">
            <a href="https://github.com/emilygracekz/impromptu-timer">
              VIEW REPO
            </a>
          </div>
          <div className="liveSite">
            <a href="/">LIVE SITE</a>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

export function Restock() {
  return (
    <StyledProjects>
      <div className="box">
        <div className="image">
          <StyledRestock>
            <img
              className="previewImage"
              src="images/app_logo.png"
              alt="Restock logo"
            />
          </StyledRestock>
        </div>
        <div className="text">
          <h3>ReStock</h3>
          <p>
            ReStock is an app that helps users calculate how long your current
            stock of an item will last you. Built in response to COVID-19, I was
            a front end developer for ReStock and the leader of ReStock's iOS
            development team.
          </p>
        </div>
        <div className="stack">
          <img src="images/baselogos.png" className="stackImage"></img>
        </div>
        <div className="links">
          <div className="repo">
            <a href="https://github.com/emilygracekz/impromptu-timer">
              VIEW REPO
            </a>
          </div>
          <div className="liveSite">
            <a href="/">LIVE SITE</a>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  justfy-content: center;

  .box {
    background: #12171e;
    border-radius: 5px;
    padding: 25px;
    margin-top: 35px;
    width: 330px;
    height: 570px;

    -webkit-box-shadow: -1px 5px 20px 5px rgba(0, 0, 0, 0.32);
    box-shadow: -1px 5px 20px 5px rgba(0, 0, 0, 0.32);
  }

  .image {
    text-align: center;
  }

  .previewImage {
    max-width: 150px;
  }

  .stack {
    padding-top: 0px;
    text-align: center;
  }

  .stackImage {
    width: 130px;
  }

  a {
    color: var(--lightBlue);
    margin-top: 30px;
  }

  h3 {
    font-size: 25px;
    padding-top: 10px;
    text-align: left;
    color: var(--yellow);
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    margin-top: 2px;
    margin-bottom: 0px;
  }

  a {
    color: var(--grey);
    padding-top: 0px;
    text-decoration: none;
    padding-bottom: 20px;
    font-weight: bold;
  }

  a:hover {
    font-size: 16.5px;
    transition: all 200ms;
    font-size-adjust: 20px;
  }

  p {
    color: var(--grey);
    text-decoration: none;
    font-size: 20px;
    border-bottom: 1px solid var(--dark);
    padding-bottom: 10px;
    margin-top: 5px;
    text-align: left;
    line-height: 1.2;
  }

  .previewImage {
    max-width: 250px;
    border-radius: 5px;
  }

  @media (min-width: 750px) {
    .box {
      width: 700px;
      height: 370px;
    }

    .image {
      float: left;
      width: 50%;
    }

    .text {
      padding-top: 0px;
      float: right;
      width: 50%;
    }

    .repo {
      float: right;
    }

    .liveSite {
      float: left;
    }

    p,
    h3 {
      text-align: left;
      max-width: 100%;
    }

    a {
      color: var(--blue);
    }

    h3 {
      letter-spacing: 0.5;
      font-size: 25px;
      text-decoration: none;
    }

    .stack {
      text-align: center;
      padding-top: 50px;
    }

    .links {
      text-align: center;
    }

    .previewImage {
      max-width: 400px;
    }
  }

  @media (min-width: 1100px) {
    .previewImage {
      max-width: 400px;
    }

    .box {
      width: 1000px;
    }
  }
`;

const StyledRestock = styled.div`
  .previewImage {
    max-width: 190px;
    padding-bottom: 0px;
  }

  @media (min-width: 750px) {
    .previewImage {
      max-width: 250px;
      padding-bottom: 0px;
    }
  }
`;
