// Imports
import work from "../public/json/work.json";
import Image from "next/image";
import tree from "../public/img/misc/tree.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container">
        {" "}
        <div className="overview">
          <div>2025</div>
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2025" && (
                <>
                  <div>{work.title}</div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div> <div>2024</div>
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2024" && (
                <>
                  <div>{work.title}</div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div> <div>2023</div>
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2023" && (
                <>
                  <div>{work.title}</div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div> <div>2022</div>
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2022" && (
                <>
                  <div>{work.title}</div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
          <div className="dotted"></div> <div>2021</div>
          <div className="dotted"></div>
          {work.map((work) => {
            return (
              work.release === "2021" && (
                <>
                  <div>{work.title}</div>
                  <div className="dotted"></div>
                </>
              )
            );
          })}
        </div>
        <div className="info">
          Julian Tran is a composer and music producer working both within
          different visual mediums and as an independent music artist.
          <br></br>
          His work focuses on exploring the relationships between songwriting,
          soundscapes and image using a blend of physical and digital
          instruments.<br></br>
          <br></br> Please use the contact button for any information or if
          you'd like to share your project.
        </div>
        <div className="tree">
          <Image src={tree} fill alt="logo" />
        </div>
      </div>
    </footer>
  );
}
