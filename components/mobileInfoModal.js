import useDialogFocus from "./useDialogFocus";
import Image from "next/image";
import infoImg from "../public/img/misc/info.png";

export default function MobileInfoModal({ close }) {
  const ref = useDialogFocus(close);
  return (
    <div className="mobileWorkModal mobileInfoModal" role="dialog" aria-modal="true" aria-label="About Julian Tran" ref={ref} tabIndex={-1}>
      <button className="mobileX" onClick={close} aria-label="Close information">×</button>
      <p>
        Julian Tran is a composer and music producer working both within
        different visual mediums and as an independent music artist.
        <br></br> <br></br>
        His work focuses on exploring the relationships between songwriting,
        soundscapes and image using a blend of physical and digital instruments.
      </p>
      <a
        className="button1"
        href="https://juliantran.bandcamp.com/"
        target="_blank" rel="noopener noreferrer"
      >
        bandcamp
      </a>
      <a
        className="button1"
        href="https://open.spotify.com/artist/56WB4onpbv1NmX2XNzPp8Q?si=c6PKZP-XS_KJcr3bW4tiCw"
        target="_blank" rel="noopener noreferrer"
      >
        spotify
      </a>
      <a
        className="button1"
        href="https://music.apple.com/us/artist/julian-tran/1539405644"
        target="_blank" rel="noopener noreferrer"
      >
        apple music
      </a>

      <div className="mobileInfoModal_img">
        <Image src={infoImg} fill sizes="60vw" alt="Julian Tran" />
      </div>
      <button
        className="button1 mobileInfoModal_home_btn"
        onClick={close}
      >
        home
      </button>
    </div>
  );
}
