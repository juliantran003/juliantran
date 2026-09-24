import work from "../public/json/work.json";
export default function Menu({ selectWork, playWork }) {
  return <menu className="menu" aria-label="Projects">{work.map(item => <button key={item.url}
    onClick={() => playWork(item)} onMouseEnter={() => selectWork(item)} onFocus={() => selectWork(item)}>
    <span className="project-name">{item.title}</span><span>{item.type}</span>
  </button>)}</menu>;
}
