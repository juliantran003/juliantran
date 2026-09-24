// One media element owns playback. A request counter ignores stale play promises.
export function createPlayer(audio, onChange = () => {}) {
  let state = { track: null, status: "idle", muted: false, error: "" };
  let request = 0;
  const emit = (patch) => { state = { ...state, ...patch }; onChange(state); };
  const listeners = {
    playing: () => emit({ status: "playing", error: "" }),
    pause: () => { if (state.status !== "idle" && state.status !== "error") emit({ status: "paused" }); },
    waiting: () => { if (!audio.paused) emit({ status: "loading" }); },
    ended: () => emit({ status: "ended" }),
    error: () => emit({ status: "error", error: "This preview could not load. Please try again." }),
  };
  Object.entries(listeners).forEach(([name, fn]) => audio.addEventListener(name, fn));
  audio.preload = "none";
  return {
    async play(track) {
      if (!track?.audio) return;
      const current = ++request;
      if (state.track?.audio !== track.audio) {
        audio.pause();
        audio.src = track.audio;
      }
      emit({ track, status: "loading", error: "" });
      try {
        await audio.play();
        if (current === request) emit({ status: "playing" });
      } catch (error) {
        if (current !== request) return;
        emit({ status: "error", error: error.name === "NotAllowedError"
          ? "Playback was blocked. Select the project again to try again."
          : "This preview could not play. Please try again." });
      }
    },
    pause() { ++request; audio.pause(); emit({ status: "paused" }); },
    stop() { ++request; audio.pause(); audio.removeAttribute("src"); audio.load(); emit({ track: null, status: "idle", error: "" }); },
    mute() { audio.muted = !audio.muted; emit({ muted: audio.muted }); },
    destroy() { ++request; Object.entries(listeners).forEach(([name, fn]) => audio.removeEventListener(name, fn)); audio.pause(); audio.removeAttribute("src"); audio.load(); },
  };
}
