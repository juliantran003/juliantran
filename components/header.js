import Image from "next/image";
import logo from "../public/img/misc/logo.png";
import { useAudio } from "./audioContext";
export default function Header({ home, showInfo }) {
  const player = useAudio();
  const label = player.status === "playing" ? `now playing : ${player.track.title}` : player.status === "loading" ? "loading preview…" : "sound paused";
  return <header className="header">
    <div className="mobileHeader_container">
      <button className="button1" onClick={showInfo}>info</button>
      <button className="header_logo" onClick={home} aria-label="Home"><Image src={logo} fill sizes="(min-width: 1700px) 55px, 45px" alt="Julian Tran" /></button>
      <a className="button1" href="mailto:contact@juliantran.co">contact</a>
    </div>
    <div className="header_container">
      <div><button className="header_logo" onClick={home} aria-label="Home"><Image src={logo} fill sizes="(min-width: 1700px) 55px, 45px" alt="Julian Tran" /></button></div>
      <div className="header_info">
        <div className="playing_container" role="status" aria-label={label}>
          <p className="playing" aria-hidden="true">{[0, 1].map(group => <span className="playing-group" key={group}>
            {Array.from({ length: 12 }, (_, index) => index).map(copy => <span className="playing-item" key={copy}>{label} &nbsp;✹&nbsp;</span>)}
          </span>)}</p>
        </div>
        <a className="button1" href="mailto:contact@juliantran.co">contact</a>
      </div>
    </div>
  </header>;
}
