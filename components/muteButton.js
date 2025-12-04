"use client";
import { useAudio } from "./audioContext";

export default function MuteButton() {
  const { muted, toggleMute } = useAudio();

  return (
    <button
      onClick={toggleMute}
      className="px-4 py-2 bg-gray-800 text-white rounded"
    >
      {muted ? "Unmute" : "Mute"}
    </button>
  );
}
