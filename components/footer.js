// Imports
import work from "../public/json/work.json";
import Image from "next/image";
import tree from "../public/img/misc/tree.png";
import useHoverAudio from "./useHoverAudio";
export default function Footer({ setSelect, select, muted }) {
  // ADD FUNCTION SO THAT WHEN SELECTED ON ONE SELECTOR, IT SELECTS THE OTHER ON TOO AND ALSO HIGHLIGHTS THE YEAR

  const { playHoverSound, stopHoverSound } = useHoverAudio();

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="overview">
          {!select ? (
            <div className="">2025</div>
          ) : (
            <div
              className={select.release === "2025" ? "overview_clicked" : ""}
            >
              2025
            </div>
          )}
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2025" && (
                <>
                  <div
                    className={
                      select === work
                        ? "overview_clicked"
                        : "overview_highlighted"
                    }
                    onClick={() => {
                      setSelect(work);
                    }}
                    onMouseEnter={() => {
                      setSelect(work);
                      if (!muted) {
                        playHoverSound(work.audio);
                      }
                    }}
                    onMouseLeave={stopHoverSound}
                  >
                    {work.title}
                  </div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div>{" "}
          {!select ? (
            <div className="">2024</div>
          ) : (
            <div
              className={select.release === "2024" ? "overview_clicked" : ""}
            >
              2024
            </div>
          )}
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2024" && (
                <>
                  <div
                    className={
                      select === work
                        ? "overview_clicked"
                        : "overview_highlighted"
                    }
                    onClick={() => {
                      setSelect(work);
                    }}
                    onMouseEnter={() => {
                      setSelect(work);
                      if (!muted) {
                        playHoverSound(work.audio);
                      }
                    }}
                    onMouseLeave={stopHoverSound}
                  >
                    {work.title}
                  </div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div>{" "}
          {!select ? (
            <div className="">2023</div>
          ) : (
            <div
              className={select.release === "2023" ? "overview_clicked" : ""}
            >
              2023
            </div>
          )}
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2023" && (
                <>
                  <div
                    className={
                      select === work
                        ? "overview_clicked"
                        : "overview_highlighted"
                    }
                    onClick={() => {
                      setSelect(work);
                    }}
                    onMouseEnter={() => {
                      setSelect(work);
                      if (!muted) {
                        playHoverSound(work.audio);
                      }
                    }}
                    onMouseLeave={stopHoverSound}
                  >
                    {work.title}
                  </div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div>{" "}
          {!select ? (
            <div className="">2022</div>
          ) : (
            <div
              className={select.release === "2022" ? "overview_clicked" : ""}
            >
              2022
            </div>
          )}
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2022" && (
                <>
                  <div
                    className={
                      select === work
                        ? "overview_clicked"
                        : "overview_highlighted"
                    }
                    onClick={() => {
                      setSelect(work);
                    }}
                    onMouseEnter={() => {
                      setSelect(work);
                      if (!muted) {
                        playHoverSound(work.audio);
                      }
                    }}
                    onMouseLeave={stopHoverSound}
                  >
                    {work.title}
                  </div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div>{" "}
          {!select ? (
            <div className="">2021</div>
          ) : (
            <div
              className={select.release === "2021" ? "overview_clicked" : ""}
            >
              2021
            </div>
          )}
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2021" && (
                <>
                  <div
                    className={
                      select === work
                        ? "overview_clicked"
                        : "overview_highlighted"
                    }
                    onClick={() => {
                      setSelect(work);
                    }}
                    onMouseEnter={() => {
                      setSelect(work);
                      if (!muted) {
                        playHoverSound(work.audio);
                      }
                    }}
                    onMouseLeave={stopHoverSound}
                  >
                    {work.title}
                  </div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
        </div>
        <div className="info">
          Julian Tran is a composer and music producer working both within
          different visual mediums and as an independent music artist.
          <br></br> <br></br>
          His work focuses on exploring the relationships between songwriting,
          soundscapes and image using a blend of physical and digital
          instruments.
        </div>
        <div className="tree">
          <Image src={tree} fill alt="logo" />
        </div>
      </div>
    </footer>
  );
}
