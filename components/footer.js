import { Fragment } from "react";
import work from "../public/json/work.json";
import Image from "next/image";
import tree from "../public/img/misc/tree.png";
export default function Footer({ select, selectWork, playWork }) {
  return <footer className="footer"><div className="footer_container">
    <div className="overview">{[...new Set(work.map(item => item.release))].map(year => <Fragment key={year}>
      <div className={select.release === year ? "overview_clicked" : ""}>{year}</div><div className="dotted" />
      {work.filter(item => item.release === year).map(item => <Fragment key={item.url}>
        <button className={select.url === item.url ? "overview_clicked" : "overview_highlighted"}
          onClick={() => playWork(item)} onMouseEnter={() => selectWork(item)} onFocus={() => selectWork(item)}>{item.title}</button><div className="dotted" />
      </Fragment>)}
    </Fragment>)}</div>
    <div className="info">Julian Tran is a composer and music producer working both within different visual mediums and as an independent music artist.
      <br /><br />His work focuses on exploring the relationships between songwriting, soundscapes and image using a blend of physical and digital instruments.</div>
    <div className="tree"><Image src={tree} fill sizes="10vw" alt="" /></div>
  </div></footer>;
}
