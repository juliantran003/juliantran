// Imports
"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/img/misc/logo.png";
import audioondark from "../public/img/misc/audio-on-dark.png";
import audiooffdark from "../public/img/misc/audio-off-dark.png";
import audioonlight from "../public/img/misc/audio-on-light.png";
import audioofflight from "../public/img/misc/audio-off-light.png";
import { useState } from "react";

export default function Header({
  select,
  setSelect,
  clicked,
  muted,
  setMuted,
}) {
  const muteFunction = () => {
    setMuted(!muted);
  };
  const pathname = usePathname();
  return (
    <header className="header">
      <div className="header_container">
        <div>
          <div className="header_logo" onClick={() => setSelect()}>
            <Image src={logo} fill alt="logo" />
          </div>
          {select && (
            <button className="button2" onClick={() => setSelect()}>
              LATEST RELEASE
            </button>
          )}
        </div>

        <div className="header_info">
          <div className="playing_container">
            <p className="playing">
              <span>
                now playing : {select ? select.title : "Hell"}{" "}
                &nbsp;✹&nbsp;&nbsp;
              </span>
            </p>
            <p className="playing playing2">
              <span>
                now playing : {select ? select.title : "Hell"}{" "}
                &nbsp;✹&nbsp;&nbsp;
              </span>
            </p>
          </div>
          {!select ? (
            <div className="header_mute" onClick={() => muteFunction()}>
              <Image
                src={muted === false ? audioonlight : audioofflight}
                fill
                alt="mute/unmute"
              />
            </div>
          ) : (
            <div className="header_mute" onClick={() => muteFunction()}>
              <Image
                src={muted === false ? audioondark : audiooffdark}
                fill
                alt="mute/unmute"
              />
            </div>
          )}
          <button className="button1">contact</button>
        </div>
      </div>
    </header>
  );
}
