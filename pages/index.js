// Imports
import Header from "@/components/header";
import Footer from "@/components/footer";
import Menu from "@/components/menu";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import tree from "../public/img/misc/menuTree.png";
import MobileMenu from "@/components/mobileMenu";
import MobileWorkModal from "@/components/mobileWorkModal";
import MobileInfoModal from "@/components/mobileInfoModal";

export default function Home() {
  const [select, setSelect] = useState();
  const [clicked, setClicked] = useState();
  const [muted, setMuted] = useState(true);
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);

  return (
    <>
      {/* {!select && (
        <style jsx global>
          {`
            body {
              height: 100vh;
              background-image: url("/img/gif/hell.gif");
              background-size: cover;
              background-position: center;
            }
            .home_info {
              color: var(--main-background-color);
            }

            .home_info h1 {
              color: var(--main-background-color);
            }
            .button1 {
              color: var(--main-background-color);
            }
            .overview {
              color: var(--main-background-color);
            }
            .dotted {
              border-bottom: 1px dashed var(--main-background-color);
            }
            .info {
              color: var(--main-background-color);
            }
            .menu > button {
              color: var(--main-background-color);
            }
            .header_info {
              color: var(--main-background-color);
            }
          `}
        </style>
      )} */}
      {/* {!select && (
        <style jsx global>
          {`
            body {
              height: 100vh;
              background-size: cover;
              background-position: center;
            }
            .home_img {
              height: 250px;
              width: 350px;
            }
          `}
        </style>
      )}
      {select && select.type === "score" ? (
        <style jsx global>
          {`
          .home_img {
height: 250px;
  width: 350px;


}
            }
          `}
        </style>
      ) : (
        <style jsx global>
          {`
          .home_img {

  width: 200px;


}
  
            }
          `}
        </style>
      )}
      {select && select.type === "soundpiece" ? (
        <style jsx global>
          {`
          .home_img {
height: 250px;
  width: 350px;


}
            }
          `}
        </style>
      ) : (
        <style jsx global>
          {`
          .home_img {

  width: 200px;


}
  
            }
          `}
        </style>
      )} */}
      <Metadata
        title={select.title}
        img={select.gif ? select.gif : select.artwork}
      />
      <Header
        select={select}
        setSelect={setSelect}
        clicked={clicked}
        muted={muted}
        setMuted={setMuted}
        infoModal={infoModal}
        setInfoModal={setInfoModal}
        modal={modal}
        setModal={setModal}
      />

      <Menu
        setSelect={setSelect}
        setClicked={setClicked}
        select={select}
        clicked={clicked}
        muted={muted}
        setMuted={setMuted}
      />
      <Footer select={select} setSelect={setSelect} muted={muted} />
      {/* MOBILE */}
      <main className="mobileHome">
        <div className="mobileHome_tree">
          <Image src={tree} fill alt="tree" priority />
        </div>
        {infoModal && (
          <MobileInfoModal
            infoModal={infoModal}
            setInfoModal={setInfoModal}
            modal={modal}
            setModal={setModal}
          />
        )}
        {!modal && (
          <MobileMenu
            modal={modal}
            setModal={setModal}
            select={select}
            setSelect={setSelect}
          />
        )}
        {select && (
          <MobileWorkModal
            modal={modal}
            setModal={setModal}
            select={select}
            setSelect={setSelect}
            muted={muted}
            setMuted={setMuted}
          />
        )}
      </main>
      {/* DESKTOP */}
      <main className="home">
        {select && (
          <div className="home_container">
            <div className="home_img">
              <Image
                src={select.gif ? select.gif : select.artwork}
                fill
                alt={select.title}
                priority
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
                {select.director && <br></br>}
                {select.artist && <br></br>}
                {select.type} written & produced by Julian Tran
                <br></br> {select.design && `artwork by ${select.design}`}
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
            <div className="home_img">
              <Image
                src={"/img/gif/hell.gif"}
                fill
                alt="hell"
                priority={true}
              />
            </div>
            <div className="home_info">
              <p className="details">
                2025
                <br></br>
                score
              </p>
              <h1>Hell</h1>
              <p className="credits">
                film directed by Tom Brett
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
