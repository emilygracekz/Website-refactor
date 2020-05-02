import React from "react";
import styled from "styled-components";

export function NomadDiscover() {
  return (
    <StyledProjects>
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/nomaddiscover.png"
            alt="Nomad Discover app on Macbook and iPhone"
          />
        </div>
        <div className="text">
          <h3>Nomad Discover</h3>
          <p>
            An app aimed at answering the question every digital nomad has:
            where should I go next? Nomad Discover takes criteria like budget
            and weather to suggest a place for nomads to go next based off data
            from Nomad List.
          </p>
        </div>
        <div className="stack"></div>
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
            src="images/hold.png"
            alt="Nomad Discover app on Macbook and iPhone"
          />
        </div>
        <div className="text">
          <h3>Impromptu Timer</h3>
          <p>A tool for college forensics competitors to practice speeches.</p>
        </div>
        <div className="stack"></div>
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

export function CurrencyConverter() {
  return (
    <StyledProjects>
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/currency.png"
            alt="Currency converter app on Macbook and iPhone"
          />
        </div>
        <div className="text">
          <h3>Currency Converter</h3>
          <p>An app that calls an API to convert one currency to another</p>
          <div className="stack"></div>
          <div className="links">
            <div className="repo">
              <a href="https://github.com/emilygracekz/currencyConverter">
                VIEW REPO
              </a>
            </div>
            <div className="liveSite">
              <a href="/">LIVE SITE</a>
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
      <div className="box">
        <div className="image">
          <img
            className="previewImage"
            src="images/app_logo.png"
            alt="Restock logo"
          />
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
        <div className="stack"></div>
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
      </div>
    </StyledProjects>
  );
}

const StyledProjects = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .box {
    background: #dcdcdc;
    border: 1px solid white;
    border-radius: 5px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-top: 25px;
    padding-left: 10px;
    padding-right: 10px;
    width: 320px;
    height: 500px;

    -webkit-box-shadow: -1px 5px 20px 5px rgba(0, 0, 0, 0.32);
    box-shadow: -1px 5px 20px 5px rgba(0, 0, 0, 0.32);
  }

  .image {
    text-align: center;
  }

  .stack {
    border-bottom: 1px solid var(--dark) 50%;
    padding-top: 30px;
  }

  .links {
    margin-bottom: 20px;
    margin-top: 5px;
  }

  .repo {
    float: right;
  }

  .liveSite {
    float: left;
  }

  h3 {
    color: var(--dark);
    font-weight: bold;
    letter-spacing: 1px;
    text-decoration: none;
    text-align: center;
    margin-top: 2px;
    margin-bottom: 0px;
  }

  a {
    color: var(--dark);
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
    color: var(--dark);
    text-decoration: none;
    font-size: 20px;
    border-bottom: 1px solid var(--dark);
    padding-bottom: 10px;
    margin-top: 5px;
    text-align: center;
  }

  .previewImage {
    max-width: 250px;
    border-radius: 5px;
  }

  @media (min-width: 750px) {

    .box {
      width: 700px;
      height: 350px;
    }

    .image {
      float: left;
      width: 50%;
    }

    .text {
    float: right;
    width: 50%;
    }

    h3 {
      letter-spacing: 0.5;
      font-size: 25px;
      margin-bottom: 0px;
      text-decoration: none;
    }

    p {
      font-size: 20px;
    }

    .previewImage {
      max-width: 300px;
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
