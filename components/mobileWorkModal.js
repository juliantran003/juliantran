import work from "../public/json/work.json";
import { getNeighborsById } from "./getNeighborsById";
import ProjectMedia from "./projectMedia";
import ProjectDetails from "./projectDetails";
import PlayerControls from "./playerControls";
import useDialogFocus from "./useDialogFocus";
export default function MobileWorkModal({ select, selectWork, close }) {
  const { prev, next } = getNeighborsById(work, select.title);
  const ref = useDialogFocus(close);
  return <section className="mobileWorkModal" role="dialog" aria-modal="true" aria-labelledby="project-title" ref={ref} tabIndex={-1}>
    <button className="mobileX" onClick={close} aria-label="Close project">×</button>
    <div className="mobileWorkModal_img"><ProjectMedia work={select} sizes="60vw" /></div>
    <ProjectDetails work={select} mobile /><PlayerControls work={select} />
    <div className="mobileWorkModal_nav">
      <button className="button1" disabled={!prev} onClick={() => selectWork(prev)}>previous</button>
      <button className="button1" onClick={close}>home</button>
      <button className="button1" disabled={!next} onClick={() => selectWork(next)}>next</button>
    </div>
  </section>;
}
