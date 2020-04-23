import React from "react";

function LandingPage() {
  return (
    <div class="container">
      <div id="top" class="bg">
        <h1 data-type>emily kondziola</h1>
        <h2 data-type>front-end developer</h2>
          <p>
          Hi, my name is Emily and I'm a front-end web developer specializing in
          <strong>Vanilla Javascript</strong>, 
          <strong>React</strong> and
          <strong>React Native</strong>. 
          Please check out some of my projects
          below, or view my
          <a href="https://github.com/emilygracekz/Personal-website/raw/master/Emily_Kondziola_Resume_SP2020.pdf">
          resume.
          </a>
          <br />
          <br />
          <a 
            href="https://github.com/emilygracekz">
            {/* <img src="githublogo.png" alt="Github logo"> */}
            </a>
            </p>
            
      </div>
    </div>
  );
}

export default LandingPage;
