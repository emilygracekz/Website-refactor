import React from 'react';
import styled from 'styled-components';

const ProjectCard = ({
  headline,
  body,
  sitePic,
  repo,
  liveSite,
  image,
  secondImage,
}) => {
  return (
    <StyledProjects>
      <div className='wrapper'>
        <div className='box'>
          <div className='image'>
            <img className='previewImage' src={sitePic} alt='' />
          </div>
          <div className='text'>
            <h3>{headline}</h3>
            <p>{body}</p>
            <div className='links'>
              <div className='repo'>
                <a href={repo}>REPO</a>
              </div>
              <div className='liveSite'>
                <a href={liveSite}>LIVE SITE</a>
              </div>
            </div>
            <div className='stack'>
              <img src={image} className='stackImage'></img>
              {secondImage ? (
                <img src={secondImage} className='react'></img>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  );
};

const StyledProjects = styled.div`
  .box {
    background: #c5c5c5;
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
    color: var(--lightBlue);
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
      color: var(--lightBlue);
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

export default ProjectCard;
