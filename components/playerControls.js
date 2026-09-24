import { useAudio } from "./audioContext";
export default function PlayerControls({ work }) {
  const player = useAudio();
  const active = player.track?.audio === work.audio;
  const playing = active && ["playing", "loading"].includes(player.status);
  return <div className="player-controls">
    <button className="button1" onClick={() => player.toggle(work)} aria-label={`${playing ? "Pause" : "Play"} ${work.title}`}>
      {playing ? "pause" : "play"}
    </button>
    <button className="button1" onClick={player.toggleMute} aria-pressed={player.muted} aria-label={player.muted ? "Unmute preview" : "Mute preview"}>
      {player.muted ? "unmute" : "mute"}
    </button>
    <span role="status">{active && player.status === "loading" ? "loading…" : ""}{active ? player.error : ""}</span>
  </div>;
}
