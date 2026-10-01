import { createContext, useContext, useEffect, useRef, useState } from "react";
import work from "../public/json/work.json";
import logo from "../public/img/misc/logo.png";
import tree from "../public/img/misc/tree.png";
import menuTree from "../public/img/misc/menuTree.png";
import info from "../public/img/misc/info.png";

const MediaCache = createContext({ resolve: source => source });
export function MediaPreloadProvider({ children }) {
  const cache = useRef(new Map());
  const [revision, setRevision] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    const urls = [];
    const images = [];
    const imageSources = new Set([logo.src, tree.src, menuTree.src, info.src,
      ...work.flatMap(item => [item.artwork, item.poster, ...(item.collection || []).map(part => part.artwork)]).filter(Boolean)]);
    const mediaSources = new Set(work.flatMap(item => [item.audio, item.video]).filter(Boolean));
    for (const source of imageSources) {
      const image = new window.Image();
      image.src = source;
      image.decode().catch(() => {});
      images.push(image);
    }
    for (const source of mediaSources) {
      fetch(source, { signal: controller.signal }).then(response => {
        if (!response.ok) throw new Error(`Media download failed: ${source}`);
        return response.blob();
      }).then(blob => {
        if (controller.signal.aborted) return;
        const url = URL.createObjectURL(blob);
        urls.push(url);
        cache.current.set(source, url);
        setRevision(value => value + 1);
      }).catch(() => { /* Original URLs remain available if preload fails. */ });
    }
    return () => {
      controller.abort();
      urls.forEach(url => URL.revokeObjectURL(url));
      cache.current.clear();
      images.forEach(image => { image.src = ""; });
    };
  }, []);
  return <MediaCache.Provider value={{ resolve: source => cache.current.get(source) || source, revision }}>{children}</MediaCache.Provider>;
}
export function useMediaCache() { return useContext(MediaCache); }
