import work from "../public/json/work.json";
export default function MobileMenu({ open }) {
  return <menu className="mobileMenu" aria-label="Projects">{work.map(item => <button key={item.url} onClick={() => open(item)}>{item.title}</button>)}</menu>;
}
