import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPlayer } from "../lib/player.mjs";
import { useMediaCache } from "./mediaPreload";
const AudioContext = createContext(null);
export function AudioProvider({ children }) {
  const { resolve } = useMediaCache();
  const element = useRef(null);
  const player = useRef(null);
  const enabled = useRef(false);
  const current = useRef(null);
  const [state, setState] = useState({ track: null, status: "idle", muted: false, error: "" });
  const [active, setActive] = useState(false);
  const stop = () => { enabled.current = false; current.current = null; setActive(false); player.current?.stop(); };
  useEffect(() => {
    player.current = createPlayer(element.current, next => {
      setState(next);
      if (next.status === "error" || next.status === "ended") { enabled.current = false; setActive(false); }
    });
    window.addEventListener("pagehide", stop);
    return () => { window.removeEventListener("pagehide", stop); player.current.destroy(); player.current = null; };
  }, []);
  const toggle = track => {
    if (enabled.current) { enabled.current = false; setActive(false); player.current?.pause(); }
    else { enabled.current = true; setActive(true); current.current = track.audio; player.current?.play({ ...track, audio: resolve(track.audio) }); }
  };
  const follow = track => {
    if (enabled.current && current.current !== track.audio) { current.current = track.audio; player.current?.play({ ...track, audio: resolve(track.audio) }); }
  };
  return <AudioContext.Provider value={{ ...state, active, toggle, follow, stop }}>
    <audio ref={element} preload="none" />{children}
  </AudioContext.Provider>;
}
export function useAudio() { return useContext(AudioContext); }
