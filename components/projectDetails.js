export default function ProjectDetails({ work, mobile = false }) {
  return <>
    <p className="details">{work.release}<br />{work.type}</p>
    <h1 id="project-title">{work.title}</h1>
    <p className="credits">{work.director && <>film directed by {work.director}<br /></>}
      {work.artist && <>exhibition by {work.artist}<br /></>}
      {work.type} written &amp; produced by Julian Tran
      {work.design && <><br />artwork by {work.design}</>}
    </p>
    <div className={mobile ? "home_buttons mobileWorkModal_links" : "home_buttons"}>
      {work.listen && <a className="button1" href={work.listen} target="_blank" rel="noopener noreferrer">listen</a>}
      {work.watch && <a className="button1" href={work.watch} target="_blank" rel="noopener noreferrer">watch</a>}
    </div>
  </>;
}
