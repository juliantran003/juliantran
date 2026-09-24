import { createContext, useContext, useEffect, useRef, useState } from "react";
import { createPlayer } from "../lib/player.mjs";
const AudioContext = createContext(null);
export function AudioProvider({ children }) {
  const element = useRef(null);
  const player = useRef(null);
  const [state, setState] = useState({ track: null, status: "idle", muted: false, error: "" });
  useEffect(() => {
    player.current = createPlayer(element.current, setState);
    const stop = () => player.current?.stop();
    window.addEventListener("pagehide", stop);
    return () => { window.removeEventListener("pagehide", stop); player.current.destroy(); player.current = null; };
  }, []);
  const toggle = (track) => {
    if (state.track?.audio === track.audio && ["playing", "loading"].includes(state.status)) player.current?.pause();
    else player.current?.play(track);
  };
  return <AudioContext.Provider value={{ ...state, toggle, stop: () => player.current?.stop(), toggleMute: () => player.current?.mute() }}>
    <audio ref={element} preload="none" />{children}
  </AudioContext.Provider>;
}
export function useAudio() { return useContext(AudioContext); }
