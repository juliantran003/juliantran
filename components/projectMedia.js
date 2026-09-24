import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "./useMediaQuery";
export default function ProjectMedia({ work, sizes, eager = false, onToggle, playing }) {
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
  useEffect(() => {
    if (!video.current) return;
    if (moving) video.current.play().catch(() => setAnimate(false));
    else video.current.pause();
  }, [moving, displayed.video]);
  const current = displayed.url === work.url;
  return <>
    <Image key={displayed.artwork} src={displayed.poster || displayed.artwork} fill sizes={sizes}
      alt={displayed.title} preload={eager} placeholder="blur" blurDataURL={displayed.blurDataURL} />
    {!current && <Image key={work.artwork} src={work.poster || work.artwork} fill sizes={sizes}
      alt="" aria-hidden="true" loading="eager" style={{ opacity: 0 }}
      onLoad={() => setDisplayed(work)} onError={() => setDisplayed(work)} />}
    {displayed.video && reduced === false && visible && !failed && <video ref={video} key={displayed.video}
      className="project-video" src={displayed.video} poster={displayed.poster} muted loop playsInline
      preload="none" aria-hidden="true" onError={() => setFailed(true)} />}
    {onToggle && <button className="artwork-audio-toggle" onClick={onToggle} aria-label={`${playing ? "Pause" : "Listen to"} ${work.title}`} aria-pressed={playing} />}
    {displayed.video && reduced === false && <button className="motion-toggle" aria-label={animate ? "Pause animation" : "Play animation"}
      onClick={() => setAnimate(!animate)}>{animate ? "pause image" : "play image"}</button>}
  </>;
}
