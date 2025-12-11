import Image from "next/image";
import infoImg from "../public/img/misc/info.png";

export default function MobileInfoModal({
  infoModal,
  setInfoModal,
  modal,
  setModal,
}) {
  return (
    <div className="mobileWorkModal mobileInfoModal">
      <div
        className="mobileX"
        onClick={() => {
          setInfoModal(false);
          setModal(false);
        }}
      >
        x
      </div>
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
        target="_blank"
      >
        bandcamp
      </a>

      <div className="mobileInfoModal_img">
        <Image src={infoImg} fill priority={true} />
      </div>
      <button
        className="button1 mobileInfoModal_home_btn"
        onClick={() => setInfoModal(false)}
      >
        home
      </button>
    </div>
  );
}
