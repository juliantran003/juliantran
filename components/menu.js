"use client";

// Imports
import work from "../public/json/work.json";

export default function Menu({ setSelect }) {
  const hoverHandle = (work) => {
    setSelect(work);
  };
  const exitHandle = (work) => {
    // setSelect();
  };

  return (
    <menu className="menu">
      {work.map((work) => {
        return (
          <button

          // onMouseLeave={() => setSelect()}
          >
            <p
              onMouseOver={() => hoverHandle(work)}
              onMouseLeave={() => exitHandle(work)}
            >
              {work.title}
            </p>
            <span
              onMouseOver={() => hoverHandle(work)}
              onMouseLeave={() => exitHandle(work)}
            >
              {work.type}
            </span>
          </button>
        );
      })}
    </menu>
  );
}
