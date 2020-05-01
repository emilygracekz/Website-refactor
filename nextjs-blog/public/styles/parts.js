import React from "react";
import styled from "styled-components";

export function NomadDiscover() {
  return (
    <StyledProjects>
        <img
          className="previewImage"
          src="/nomaddiscoverpic.png"
          alt="Nomad Discover app on Macbook and iPhone"
        />
        <div className='text'>
        <h3>Nomad Discover</h3>
        <p>An application to help digital nomads decide where to go next</p>
        <a href="/">VIEW ></a>
        </div>
    </StyledProjects>
  );
}

export function ImpTimer() {
  return (
    <StyledProjects>
        <img
          className="previewImage"
          src="images/imptimer.png"
          alt="Nomad Discover app on Macbook and iPhone"
        />
        <div className='text'>
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
        <img
          className="previewImage"
          src="images/currencypic.png"
          alt="Currency converter app on Macbook and iPhone"
        />
        <div className='text'>
        <h3>Currency Converter</h3>
        <p>An API that'll convert one currency to another</p>
        <a href="/">VIEW ></a>
        </div>
    </StyledProjects>
  );
}

export function Restock() {
    return (
        <RestockWrapper>
        <img
          className="previewImage"
          src="images/app_logo.png"
          alt="Restock logo"
        />
        <div className='text'>
        <h3>ReStock</h3>
        <p>Read about my experience as a front end developer for ReStock</p>
        <a href="/">VIEW ></a>
        </div>
    </RestockWrapper>
  );
}

const StyledProjects = styled.div`
h3 {
    color: var(--lightBlue);
    font-weight: normal;
}

a {
    color: var(--blue);
}

  p {
    color: var(--blue);
    text-decoration: none;
    text-align: center;
    font-size: 20px;
  }

  .previewImage {
      max-width: 300px;
    }
  
  @media (min-width: 750px) {
    p {
      font-size: 20px;
    }

    .previewImage {
    max-width: 350px;
  }
  }

  @media (min-width: 1100px) {
    .previewImage {
    max-width: 450px;
  }
  }
`;

const RestockWrapper = styled.div`
    .text {
        max-width: 50%;
    }

    a {
    color: var(--blue);
}

  p {
    color: var(--lightBlue);
    text-decoration: none;
    text-align: left;
    font-size: 20px;
  }

  .previewImage {
      max-width: 200px;
    }
  
  @media (min-width: 750px) {
    p {
        font-size: 20px;
    }

    .previewImage {
    max-width: 225px;
  }
  }
`;
