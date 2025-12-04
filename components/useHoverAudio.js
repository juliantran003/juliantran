"use client";
import { useAudio } from "./audioContext";
import { useRef } from "react";

export default function useHoverAudio() {
  const audioRef = useRef(null);
  const { muted } = useAudio();
  const playHoverSound = (url) => {
    if (!url) return;

    // Create or reuse audio element
    if (!audioRef.current) {
      audioRef.current = new Audio(url);
    } else {
      audioRef.current.pause();
      audioRef.current.src = url;
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const stopHoverSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { playHoverSound, stopHoverSound };
}
