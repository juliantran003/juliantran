import Image from "next/image";
import { getNeighborsById } from "./getNeighborsById";
import work from "../public/json/work.json";

export default function MobileWorkModal({
  select,
  setSelect,
  modal,
  setModal,
}) {
  const returnHandle = () => {
    setSelect();
    setModal(false);
  };

  const { prev, next } = getNeighborsById(work, select.title);
  return (
    <main className="mobileWorkModal">
      <div
        className="mobileX"
        onClick={() => {
          returnHandle();
        }}
      >
        x
      </div>

      <div className="mobileWorkModal_img">
        <Image
          src={select.gif ? select.gif : select.artwork}
          fill
          alt={select.gif ? select.gif : select.artwork}
          priority
        />
      </div>
      <p>{select.release}</p>
      <h1>{select.title}</h1>
      <p>
        {select.director && "film directed by"}
        {select.director && <br></br>}
        {select.director && select.director}
        {select.artist && "exhibition by"}
        {select.artist && <br></br>}
        {select.artist && select.artist}
        {select.artist && <br></br>}
        {select.director && <br></br>}
        {select.artist && <br></br>}
        {select.director && <br></br>}
        {select.type} written & produced by<br></br> Julian Tran
        <br></br> {select.design && <br></br>}
        {select.design && "artwork by"}
        {select.design && <br></br>}
        {select.design && select.design}
      </p>
      <div className="mobileWorkModal_links">
        {select.listen && (
          <a className="button1" href={select.listen} target="_blank">
            listen
          </a>
        )}
        {select.watch && (
          <a className="button1" href={select.watch} target="_blank">
            watch
          </a>
        )}
      </div>
      <div className="mobileWorkModal_nav">
        {prev ? (
          <button
            className="button1"
            onClick={() => {
              setSelect(prev);
            }}
          >
            previous
          </button>
        ) : (
          <button className="button1"></button>
        )}
        <button
          className="button1"
          onClick={() => {
            returnHandle();
          }}
        >
          home
        </button>
        {next ? (
          <button
            className="button1"
            onClick={() => {
              setSelect(next);
            }}
          >
            next
          </button>
        ) : (
          <button className="button1"></button>
        )}
      </div>
    </main>
  );
}
