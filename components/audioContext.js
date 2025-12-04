"use client";
import { createContext, useContext, useState } from "react";

const AudioContext = createContext({
  muted: false,
  toggleMute: () => {},
});

export function AudioProvider({ children }) {
  const [muted, setMuted] = useState(false);

  const toggleMute = () => setMuted((m) => !m);

  return (
    <AudioContext.Provider value={{ muted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  return useContext(AudioContext);
}
