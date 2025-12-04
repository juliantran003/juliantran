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
}) {
  const { playHoverSound, stopHoverSound } = useHoverAudio();

  return (
    <menu className="menu">
      {work.map((work) => {
        return (
          <button
            onClick={() => {
              setClicked(work);
              setSelect(work);
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
