# Julian Tran portfolio

A Next.js Pages Router portfolio for Julian Tran. Uses Node.js 22 or later and npm.

## Develop and validate

```sh
npm ci
npm test
npm run build
npm start
```

For development, use `npm run dev`. The existing hosting integration can build with `npm run build`; no environment secrets are required. Use a hosting runtime that supports Node.js 22 and Next.js 16.

## Media and playback

- Projects live in `public/json/work.json`. Preserve stable `url` identifiers.
- Artwork uses WebP (up to 1200 px), responsive Next Image sizes and tiny inline blur placeholders. The previous image stays visible until the next one loads.
- Animated previews use silent H.264 MP4 loops with fast-start metadata and WebP posters. Reduced-motion users see stills; everyone can pause animation. Hidden tabs pause video.
- One shared audio element loads only on an explicit play action. Click a project or its artwork to start sound. While sound is active, hovering or keyboard-focusing another project switches playback to that project; leaving an item does not stop it. Click again to pause. On mobile, opening a project starts playback and previous/next follows the active playback state. Returning home, changing layout or leaving the page stops playback. No separate play/mute buttons are shown.
- Only the active desktop/mobile media view mounts. No catalogue-wide image or audio preload is emitted.
- M4A audio previews are unchanged. Unreferenced source media was removed from the current tree; originals remain recoverable from Git history.

## Verification

`npm test` covers playback cancellation, stale promises, mute, track switching, error recovery, cleanup and referenced media existence. Run `npm run build` before deployment. Browser checks should include desktop/mobile, project switching, mute, next/previous, Escape, focus return and reduced motion.

The five GIFs (36.11 MB combined) were replaced by MP4 previews (0.66 MB combined). These are asset-size savings, not a claimed measured page-load speedup.

Existing typography and copy are preserved. Font licensing remains the owner's responsibility; this change does not add or relicense fonts.
