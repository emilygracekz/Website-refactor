import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Emily Kondziola</title>
        <link rel='icon' href='/home.png' />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap'
          rel='stylesheet'
        />
      </Head>
      <main>
        <section className='top'>
          <h1>emily kondziola</h1>
          <p>
            react developer @ <a href='https://studio.jogg.co/'>jogg</a>
          </p>

          <div className='icons'>
            <a href='https://github.com/emilygracekz'>
              <img
                src='images/github.png'
                alt='github'
                className='github'
              ></img>
            </a>
            <a href='https://www.linkedin.com/in/emilykondziola/'>
              <img
                src='images/linkedin.png'
                alt='linkedin'
                className='linkedin'
              ></img>
            </a>
          </div>
        </section>
        <section className='projects'>
          <h1>selected projects</h1>
          <div className='center'>
            <ProjectCard
              headline={'Nomad Discover'}
              body={
                'An app that suggests where digital nomads should go next. Nomad Discover takes criteria like budget and weather to suggest a place for nomads to go based off data from Nomad List.'
              }
              sitePic={'images/nomaddiscover.png'}
              repo={'https://github.com/emilygracekz/nomadDiscover'}
              liveSite={'https://emilygracekz.github.io/nomadDiscover/'}
              image={'images/logos.png'}
            />

            <ProjectCard
              headline={'Impromptu Timer'}
              body={
                'A tool for college forensics competitors to practice impromptu speeches. This timer counts down from seven minutes and provides a random quotation when the start button is pressed.'
              }
              sitePic={'images/imptimer.png'}
              repo={'https://github.com/emilygracekz/impromptu-timer'}
              liveSite={'/impromptu-timer'}
              image={'images/logos.png'}
              secondImage={'images/react.png'}
            />
          </div>
        </section>
      </main>

      <footer className='footer'>
        <p>
          <br />
          emilygracekondziola@gmail.com
        </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        .top {
          height: 50em;
        }

        .projects {
          height: 92em;
        }

        main {
          flex: 1;
        }

        h1,
        p {
          color: #ffefb9;
          z-index: 999;
          position: relative;
          text-align: center;
        }

        h1 {
          font-size: 32px;
          font-family: 'Merriweather', serif;
          letter-spacing: 1px;
          margin: 0;
          padding-top: 150px;
          font-weight: lighter;
        }

        h2 {
          font-size: 32px;
          font-family: 'Merriweather', serif;
          font-style: italic;
          margin-bottom: 20px;
          margin-top: 0;
          text-align: center;
        }

        mark {
          background-color: white;
          border-radius: 2px;
          padding: 7px;
        }

        p {
          font-family: 'Montserrat', sans-serif;
          color: #ffefb9;
          font-size: 20px;
          line-height: 1.55;
          text-align: center;
        }

        a {
          font-size: 20px;
          line-height: 1.55;
          text-decoration: none;
          color: #ffefb9;
        }

        a:hover {
          opacity: 50%;
        }

        .projects a:hover {
          font-size: 23px;
        }

        .right {
          width: 100%;
          text-align: center;
        }

        .left {
          width: 100%;
          text-align: center;
        }

        .center {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .projects h2 {
          font-size: 30px;
          padding-bottom: 20px;
        }

        footer {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          height: 10em;
        }

        .linkedin,
        .github {
          max-width: 30px;
        }

        .linkedin {
          margin-left: 20px;
        }

        .icons {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }

        img:hover {
          opacity: 50%;
        }

        @media (min-width: 700px) {
          .projects {
            height: 93em;
          }

          h1,
          h2 {
            font-size: 45px;
          }

          .projects h2 {
            font-size: 40px;
          }
        }

        @media (min-width: 960px) {
          .top {
            height: 50em;
          }

          .projects {
            height: 140em;
          }

          h1 {
            font-size: 60px;
          }

          h2 {
            font-size: 60px;
          }

          .projects h2 {
            font-size: 50px;
          }

          p,
          a {
            font-size: 25px;
          }

          @media (min-width: 960px) {
            .projects {
              height: 65em;
            }
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 15px;
          margin: 0;
          background-color: var(--darkBlue);
          font-family: 'Montserrat', sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          --purple: #e635d4;
          --green: #3be8b0;
          --blue: #1da1f2;
          --yellow: #ffefb9;
          --darkBlue: #134080;
          --red: #d9544d;
        }
      `}</style>
    </div>
  );
}
