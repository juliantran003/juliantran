import work from "../public/json/work.json";

export default function MobileMenu({ select, setSelect, modal, setModal }) {
  return (
    <menu className="mobileMenu">
      {work.map((work) => {
        return (
          <button
            onClick={() => {
              setSelect(work);
              setModal(true);
            }}
          >
            {work.title}
          </button>
        );
      })}
    </menu>
  );
}
