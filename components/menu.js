"use client";

// Imports
import work from "../public/json/work.json";

export default function Menu({ setSelect }) {
  const hoverHandle = (work) => {
    setSelect(work);
  };

  return (
    <menu className="menu">
      {work.map((work) => {
        return (
          <button

          // onMouseLeave={() => setSelect()}
          >
            <p onMouseOver={() => hoverHandle(work)}>{work.title}</p>
            <span onMouseOver={() => setSelect(work)}> {work.type}</span>
          </button>
        );
      })}
    </menu>
  );
}
