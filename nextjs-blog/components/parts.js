import React from "react";
import styled from "styled-components";

export function NomadDiscover() {
  return (
    <StyledProjects>
    <div className='wrapper'>
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/nomaddiscover.png"
            alt="Nomad Discover app"
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
                REPO
              </a>
            </div>
            <div className="liveSite">
              <a href="http://emilyk.codes/nomad-discover/">LIVE SITE</a>
            </div>
          </div>
          <div className="stack">
            <img src="images/logos.png" className="stackImage"></img>
          </div>
        </div>
      </div>
      </div>
    </StyledProjects>
  );
}

export function ImpTimer() {
  return (
    <StyledProjects>
    <div className='wrapper'>
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/imptimer.png"
            alt="Nomad Discover app on Macbook and iPhone"
          />
        </div>
        <div className="text">
          <h3>Impromptu Timer</h3>
          <p>
            A tool for college forensics competitors to practice impromptu speeches. This timer counts down from seven minutes and provides a random quotation when the start button is pressed.
          </p>
          <div className="links">
            <div className="repo">
              <a href="https://github.com/emilygracekz/impromptu-timer">
                REPO
              </a>
            </div>
            <div className="liveSite">
              <a href="http://emilyk.codes/impromptu-timer/">LIVE SITE</a>
            </div>
          </div>
          <div className="stack">
            <img src="images/logos.png" className="stackImage"></img><img src='images/react.png' className='react'></img>
          </div>
        </div>
      </div>
      </div>
    </StyledProjects>
  );
}

export function Restock() {
  return (
    <StyledProjects>
    <div className='wrapper'>
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
            A startup that helps people calculate how long their current
            stock of an item will last. Built in response to COVID-19, I was
            a front end developer for ReStock and the team leader of the iOS
            development group.
          </p>
        <div className="links">
          <div className="repo">
            <a href="https://play.google.com/store/apps/details?id=com.zachl.restock">
              DOWNLOAD
            </a>
          </div>
          <div className="liveSite">
            <a href="https://www.getrestock.com/">WEBSITE</a>
          </div>
        </div>
        <div className="stack">
          <img src="images/logos.png" className="stackImage"></img><img src='images/react.png' className='react'></img>
        </div>
      </div>
      </div>
      </div>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  .box {
    background: #12171e;
    border-radius: 5px;
    padding: 25px;
    margin-top: 25px;
    width: 330px;
    height: 620px;
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
    padding-top: 50px;
    text-align: center;
  }

  .stackImage {
    width: 130px;
  }

  .react {
    width: 53px;
    padding-left: 6px;
  }

  .repo {
      float: right;
    }

    .liveSite {
      float: left;
    }

  a {
    color: var(--lightBlue);
    margin-top: 30px;
  }

  h3 {
    font-size: 25px;
    text-align: left;
    color: var(--yellow);
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  a {
    color: var(--blue);
    padding-top: 0px;
    text-decoration: none;
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
    height: 200px;
    border-radius: 5px;
  }

  @media (min-width: 960px) {
    .wrapper {
      width: 100%;
      text-align: center;
    }

    .box {
      display: inline-block;
      margin: 25px auto;

      width: 900px;
      height: 360px;
    }

    .image {
      float: left;
      width: 50%;
    }

    .text {
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
      height: 300px;
    }
  }

  @media (min-width: 1100px) {
    .box {
      width: 960px;
      align-items: center;
    }
  }
`;

const StyledRestock = styled.div`
  .previewImage {
    width: 200px;
    height: 200px;
    padding-bottom: 0px;
  }

  @media (min-width: 960px) {
    .previewImage {
    width: 290px;
    height: 280px;
    }

    .previewImage {
      padding-bottom: 0px;
    }
}
`;
