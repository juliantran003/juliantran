import Image from "next/image";
import audioOn from "../public/img/misc/audio-on-dark.png";
import audioOff from "../public/img/misc/audio-off-dark.png";
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
        <div className="playing_container" role="status"><p className="playing"><span>{label} &nbsp;✹&nbsp;</span></p></div>
        <button className="header_mute button1" onClick={player.toggleMute} aria-pressed={player.muted} aria-label={player.muted ? "Unmute preview" : "Mute preview"}><Image src={player.muted ? audioOff : audioOn} fill sizes="20px" alt="" /></button>
        <a className="button1" href="mailto:contact@juliantran.co">contact</a>
      </div>
    </div>
  </header>;
}
