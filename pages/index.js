// Imports
import Header from "@/components/header";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [select, setSelect] = useState();

  return (
    <>
      {!select && (
        <style jsx global>
          {`
            body {
              background-image: url("/img/gif/hell.gif");
              height: 100vh;
              background-size: cover;
              background-position: center;
            }
            .menu > button {
              color: var(--main-background-color);
              opacity: 0.8;
            }
            .playing {
              color: var(--main-background-color);
            }
            .button1 {
              color: var(--main-background-color);
            }
            .button2 {
              color: var(--main-background-color);
              opacity: 0.8;
            }
            .info {
              color: var(--main-background-color);
              opacity: 0.85;
            }
            .overview {
              color: var(--main-background-color);
              opacity: 0.8;
            }
            .dotted {
              border-bottom: 1px dashed var(--main-background-color);
            }
            .credits {
              color: var(--main-background-color);
              opacity: 0.8;
            }
            .details {
              color: var(--main-background-color);
              opacity: 0.8;
            }
            .home_info h1 {
              color: var(--main-background-color);
            }
          `}
        </style>
      )}
      {select &&
        (select.type === "single" || select.type === "album" ? (
          <style jsx global>
            {`
              body {
                background-color: var(--main-background-color);
              }
              .button1 {
                color: var(--main-background-color-inverted);
              }
            `}
          </style>
        ) : (
          <style jsx global>
            {`
              body {
                background-image: url(${select.gif});
                height: 100vh;
                background-size: cover;
                background-position: center;
                content: url("/img/gif/hell.gif") url("/img/gif/soft-reset.gif")
                  url("/img/gif/coast.gif") url("/img/gif/ecfc.gif")
                  url("/img/gif/riku.gif");
              }
              .menu > button {
                color: var(--main-background-color);
                opacity: 0.8;
              }
              .playing {
                color: var(--main-background-color);
              }
              .button1 {
                color: var(--main-background-color);
              }
              .button2 {
                color: var(--main-background-color);
                opacity: 0.8;
              }
              .info {
                color: var(--main-background-color);
                opacity: 0.85;
              }
              .overview {
                color: var(--main-background-color);
                opacity: 0.8;
              }
              .dotted {
                border-bottom: 1px dashed var(--main-background-color);
              }
              .credits {
                color: var(--main-background-color);
                opacity: 0.8;
              }
              .details {
                color: var(--main-background-color);
                opacity: 0.8;
              }
              .home_info h1 {
                color: var(--main-background-color);
              }
            `}
          </style>
        ))}
      <Header select={select} setSelect={setSelect} />

      <Menu setSelect={setSelect} />
      <Footer />
      <main className="home">
        {select && (
          <div className="home_container">
            <div className="home_img">
              <Image
                src={select.artwork}
                fill
                alt={select.title}
                priority={true}
              />
            </div>
            <div className="home_info">
              <p className="details">
                {select.release}
                <br></br>
                {select.type}
              </p>
              <h1>{select.title}</h1>
              <p className="credits">
                {select.director && `film directed by ${select.director}`}
                {select.artist && `exhibtion by ${select.artist}`}
                {select.design && `artwork by ${select.design}`}
                <br></br>
                {select.type} written & produced by Julian Tran
              </p>
              <div className="home_buttons">
                {select.listen && (
                  <a className="button1" href={select.listen} target="_blank">
                    listen
                  </a>
                )}
                {select.watch && (
                  <a className="button1" href={select.watch} target="_blank">
                    watch
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
        {!select && (
          <div className="home_container">
            <div className="home_info">
              <p className="details">
                LATEST RELEASE
                <br></br>
              </p>
              <h1>Hell</h1>
              <p className="credits">
                film directed by tom brett
                <br></br>
                score written & produced by Julian Tran
              </p>

              <div className="home_buttons">
                <a
                  className="button1"
                  href="https://distrokid.com/hyperfollow/juliantran/hell"
                  target="_blank"
                >
                  listen
                </a>
                <a
                  className="button1"
                  href="https://www.nowness.com/series/nowness-experiments/hell-tom-brett"
                  target="_blank"
                >
                  watch
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
