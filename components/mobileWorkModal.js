import Image from "next/image";
import { getNeighborsById } from "./getNeighborsById";
import work from "../public/json/work.json";
import audioondark from "../public/img/misc/audio-on-dark.png";
import audiooffdark from "../public/img/misc/audio-off-dark.png";
import audioonlight from "../public/img/misc/audio-on-light.png";
import audioofflight from "../public/img/misc/audio-off-light.png";
import useHoverAudio from "./useHoverAudio";

export default function MobileWorkModal({
  select,
  setSelect,
  modal,
  setModal,
  muted,
  setMuted,
}) {
  const returnHandle = () => {
    setSelect();
    setModal(false);
    setMuted(true);
    stopHoverSound(select.audio);
  };
  const { playHoverSound, stopHoverSound } = useHoverAudio();
  const clickHandle = (work) => {
    setSelect(work);
    if (muted) {
      setMuted(false);
      playHoverSound(work.audio);
    }
    if (!muted) {
      setMuted(true);
      stopHoverSound(work.audio);
    }
  };

  const previousHandle = () => {
    setSelect(prev);
    stopHoverSound(select.audio);
    if (!muted) {
      playHoverSound(prev.audio);
    }
  };
  const nextHandle = () => {
    setSelect(next);
    stopHoverSound(select.audio);
    if (!muted) {
      playHoverSound(next.audio);
    }
  };

  const { prev, next } = getNeighborsById(work, select.title);
  return (
    <main className="mobileWorkModal">
      <div
        className="mobileX"
        onClick={() => {
          returnHandle();
        }}
      >
        x
      </div>

      <div
        className="mobileWorkModal_img"
        onClick={() => {
          clickHandle(select);
        }}
      >
        <Image
          src={select.gif ? select.gif : select.artwork}
          fill
          alt={select.gif ? select.gif : select.artwork}
          priority
        />
        <div className="mobileWorkModal_mute" onClick={() => setMuted(!muted)}>
          <Image
            src={muted === false ? audioonlight : audioofflight}
            fill
            alt="mute/unmute"
          />
        </div>
      </div>
      <p>{select.release}</p>
      <h1>{select.title}</h1>
      <p>
        {select.director && "film directed by"}
        {select.director && <br></br>}
        {select.director && select.director}
        {select.artist && "exhibition by"}
        {select.artist && <br></br>}
        {select.artist && select.artist}
        {select.artist && <br></br>}
        {select.director && <br></br>}
        {select.artist && <br></br>}
        {select.director && <br></br>}
        {select.type} written & produced by<br></br> Julian Tran
        <br></br> {select.design && <br></br>}
        {select.design && "artwork by"}
        {select.design && <br></br>}
        {select.design && select.design}
      </p>
      <div className="mobileWorkModal_links">
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
      <div className="mobileWorkModal_nav">
        {prev ? (
          <button
            className="button1"
            onClick={() => {
              previousHandle();
            }}
          >
            previous
          </button>
        ) : (
          <button className="button1"></button>
        )}
        <button
          className="button1"
          onClick={() => {
            returnHandle();
          }}
        >
          home
        </button>
        {next ? (
          <button
            className="button1"
            onClick={() => {
              nextHandle();
            }}
          >
            next
          </button>
        ) : (
          <button className="button1"></button>
        )}
      </div>
    </main>
  );
}
