"use client";

// Imports
import work from "../public/json/work.json";

import useHoverAudio from "./useHoverAudio";

export default function Menu({
  setSelect,
  select,
  clicked,
  setClicked,
  muted,
  setMuted,
}) {
  const { playHoverSound, stopHoverSound } = useHoverAudio();

  const clickHandle = (work) => {
    setClicked(work);
    setSelect(work);
    if (muted) {
      setMuted(false);
      playHoverSound(work.audio);
    }
  };
  return (
    <menu className="menu">
      {work.map((work) => {
        return (
          <button
            onClick={() => {
              clickHandle(work);
            }}
            onMouseEnter={() => {
              setSelect(work);
              if (!muted) {
                playHoverSound(work.audio);
              }
            }}
            onMouseLeave={stopHoverSound}
            // onMouseLeave={() => setSelect()}
          >
            <p>{work.title}</p>
            <span>{work.type}</span>
          </button>
        );
      })}
    </menu>
  );
}
