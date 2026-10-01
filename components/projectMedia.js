import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./useMediaQuery";
import { useMediaCache } from "./mediaPreload";
export default function ProjectMedia({ work, sizes, eager = false, onToggle, playing, showSoundIcon = false }) {
  const { resolve } = useMediaCache();
  const reduced = useMediaQuery("(prefers-reduced-motion: reduce)");
  const [displayed, setDisplayed] = useState(work);
  const [animate, setAnimate] = useState(true);
  const [visible, setVisible] = useState(true);
  const [failed, setFailed] = useState(false);
  const video = useRef(null);
  useEffect(() => {
    const update = () => setVisible(document.visibilityState === "visible");
    update(); document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);
  useEffect(() => { setAnimate(true); setFailed(false); }, [work.url]);
  const moving = reduced === false && animate && visible && !failed && displayed.url === work.url;
  const videoSource = resolve(displayed.video);
  useEffect(() => {
    if (!video.current) return;
    if (moving) video.current.play().catch(() => setAnimate(false));
    else video.current.pause();
  }, [moving, videoSource]);
  const current = displayed.url === work.url;
  return <>
    <Image key={displayed.artwork} src={displayed.poster || displayed.artwork} fill sizes={sizes}
      alt={displayed.title} preload={eager} placeholder="blur" blurDataURL={displayed.blurDataURL} />
    {!current && <Image key={work.artwork} src={work.poster || work.artwork} fill sizes={sizes}
      alt="" aria-hidden="true" loading="eager" style={{ opacity: 0 }}
      onLoad={() => setDisplayed(work)} onError={() => setDisplayed(work)} />}
    {displayed.video && reduced === false && visible && !failed && <video ref={video} key={displayed.video}
      className="project-video" src={videoSource} poster={displayed.poster} muted loop playsInline
      preload="auto" aria-hidden="true" onError={() => setFailed(true)} />}
    {onToggle && <button className="artwork-audio-toggle" onClick={onToggle} aria-label={`${playing ? "Pause" : "Listen to"} ${work.title}`} aria-pressed={playing}>
      {showSoundIcon && <span className="mobile-sound-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 5 6 9H3v6h3l5 4V5Z" />
          {playing ? <><path d="M15 8a6 6 0 0 1 0 8" /><path d="M18 5a10 10 0 0 1 0 14" /></> : <><path d="m16 9 5 6" /><path d="m21 9-5 6" /></>}
        </svg>
      </span>}
    </button>}

  </>;
}
