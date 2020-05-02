import Head from "next/head";
import { NomadDiscover, ImpTimer, CurrencyConverter, Restock } from '../public/styles/parts';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Emily Kondziola</title>
        <link rel="icon" href="/home.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <section className="bg">
          <h1>emily kondziola</h1>
          <h2>front-end developer</h2>
          <p>
            Hi there, my name is Emily and I'm a front-end web developer specializing
            in <mark>Vanilla Javascript, React and React Native.</mark> Please
            check out some of my projects below, or view my {''}
              <a href="https://github.com/emilygracekz/Personal-website/raw/master/Emily_Kondziola_Resume_SP2020.pdf">
            resume.
            </a>
          </p>
        </section>
        <section className="projects">
          <h2>what i've been spending my time on</h2>
          <div className="center">
              <NomadDiscover />
              <ImpTimer />
              <Restock />
          </div>
        </section>
      </main>

      <footer>
        <p>
          Let's build something together. <br />
          Contact me at <mark> emilygracekondziola@gmail.com</mark>
        </p>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
        }

        .bg {
          height: 50em;
        }

        .projects {
          height: 65em;
        }

        main {
          flex: 1;
        }

        mark {
          background-color: var(--yellow);
          border-radius: 2px;
        }

        h1 {
          font-family: "Merriweather", serif;
          letter-spacing: 1px;
          color: var(--purple);
          font-weight: lighter;
          font-size: 60px;
          margin: 0;
          padding-top: 200px;
        }

        h2 {
          font-family: "Merriweather", serif;
          color: var(--green);
          font-style: italic;
          font-size: 60px;
          margin-bottom: 20px;
          margin-top: 0;
          text-align: left;
        }

        .projects h2 {
          border-bottom: 1px solid var(--lightBlue);
          padding-bottom: 20px;
          font-size: 50px;
        }

        p {
          font-family: "Montserrat", sans-serif;
          color: var(--blue);
          line-height: 1.55;
          margin: 0;
          font-size: 25px;
        }

        .bg p {
          border-top: 1px solid var(--lightBlue);
          padding-top: 20px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid var(--lightBlue);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin-top: 350px;
        }

        a {
          color: var(--lightBlue);
          
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 660px) {
          .projects {
          height: 100em;
        }

          h1,
          h2 {
            font-size: 30px;
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
          }

          p,
          a {
            font-size: 17px;
            line-height: 1.55;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 15px;
          margin: 0;
          background-color: var(--dark);
          font-family: "Montserrat", sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          --purple: #e635d4;
          --green: #3be8b0;
          --blue: #1da1f2;
          --lightBlue: #65bff6;
          --yellow: #f7dc68;
          --dark: #26303d;
          --red: #d9544d;
          --black: #565656;
        }
      `}</style>
    </div>
  );
}
