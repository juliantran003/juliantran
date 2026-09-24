import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import MobileMenu from "../components/mobileMenu";
import MobileWorkModal from "../components/mobileWorkModal";
import MobileInfoModal from "../components/mobileInfoModal";
import ProjectMedia from "../components/projectMedia";
import ProjectDetails from "../components/projectDetails";
import PlayerControls from "../components/playerControls";
import useMediaQuery from "../components/useMediaQuery";
import { useAudio } from "../components/audioContext";
import tree from "../public/img/misc/menuTree.png";
import work from "../public/json/work.json";
export default function Home() {
  const [select, setSelect] = useState(work[0]);
  const [modal, setModal] = useState(false);
  const [infoModal, setInfoModal] = useState(false);
  const mobile = useMediaQuery("(max-width: 600px)");
  const player = useAudio();
  const selectWork = item => { if (!item) return; if (item.url !== select.url) player.stop(); setSelect(item); };
  const playWork = item => { selectWork(item); player.toggle(item); };
  const home = () => { player.stop(); setModal(false); setInfoModal(false); setSelect(work[0]); };
  useEffect(() => { player.stop(); setModal(false); setInfoModal(false); }, [mobile]); // stop when changing layout
  const dialogOpen = mobile && (modal || infoModal);
  return <>
    <div inert={dialogOpen ? true : undefined}>
      <Header home={home} showInfo={() => { player.stop(); setModal(false); setInfoModal(true); }} />
      {mobile === false && <><Menu selectWork={selectWork} playWork={playWork} />
        <main className="home"><div className="home_container">
          <div className="home_img"><ProjectMedia work={select} eager={select.url === work[0].url} sizes="(min-width: 1700px) 25vw, (max-width: 1090px) 175px, (max-width: 1285px) 225px, 275px" /></div>
          <div className="home_info"><ProjectDetails work={select} /><PlayerControls work={select} /></div>
        </div></main><Footer select={select} selectWork={selectWork} playWork={playWork} /></>}
      {mobile === true && <main className="mobileHome">
        <div className="mobileHome_tree"><Image src={tree} fill sizes="140vw" alt="" preload /></div>
        <div hidden={dialogOpen}><MobileMenu open={item => { selectWork(item); setModal(true); }} /></div>
      </main>}
      {mobile === null && <main className="loading-shell"><h1>Julian Tran</h1><p>Composer &amp; music producer</p></main>}
    </div>
    {mobile && modal && <MobileWorkModal select={select} selectWork={selectWork} close={home} />}
    {mobile && infoModal && <MobileInfoModal close={home} />}
  </>;
}
