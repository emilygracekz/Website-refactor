import Head from "next/head";
import { NomadDiscover, ImpTimer, Restock } from "../components/parts";

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
          <p>
            <mark>software developer @ jogg</mark>
          </p>
        </section>
        <section className="projects">
          <h1>projects</h1>
          <div className="center">
            <NomadDiscover />
            <ImpTimer />
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          <a href="https://github.com/emilygracekz">
            <img src="images/github.png"></img>
          </a>
          <a href="https://www.linkedin.com/in/emilykondziola/">
            <img src="images/linkedin.png"></img>
          </a>
          <br />
          emilygracekondziola@gmail.com
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
          height: 87em;
        }

        main {
          flex: 1;
        }

        h1,
        p {
          color: #000;
          z-index: 999;
          position: relative;
          text-align: center;
        }

        h1 {
          font-size: 32px;
          font-family: "Merriweather", serif;
          letter-spacing: 1px;
          margin: 0;
          padding-top: 150px;
          font-weight: lighter;
        }

        h2 {
          font-size: 32px;
          font-family: "Merriweather", serif;
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
          font-family: "Montserrat", sans-serif;
          color: var(--grey);
          font-size: 20px;
          line-height: 1.55;
          text-align: center;
        }

        a {
          font-size: 20px;
          line-height: 1.55;
          color: rgb(217, 0, 118);
          text-decoration: none;
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

        footer img {
          max-width: 30px;
          margin-left: 6px;
          margin-right: 6px;
        }

        img:hover {
          opacity: 50%;
        }

        @media (min-width: 700px) {
          .projects {
            height: 88em;
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
          .bg {
            height: 50em;
          }

          .projects {
            height: 135em;
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
              height: 60em;
            }
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
          --lightBlue: #000;
          --yellow: #000;
          --dark: #e7e7e7;
          --red: #d9544d;
          --black: #c5c5c5;
          --grey: #000;
        }
      `}</style>
    </div>
  );
}
