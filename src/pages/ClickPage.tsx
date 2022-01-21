import React, { FC, useEffect, useState, useRef } from "react";
import useClickOutside from "@hooks/useClickOutside";

type ClickPageProps = {};

type ClickPageState = {};

export const ClickPage: FC<ClickPageProps> = ({}) => {
  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // | State Variables
  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*

  const [isShow, setIsShow] = useState(false);

  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // | Hooks
  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*
  const boxRef = useRef<HTMLDivElement>(null);
  useClickOutside(boxRef, () => {
    if (isShow) {
      setIsShow(false);
    }
  });

  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // | Functions
  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*
  const toggle = () => {
    setIsShow(!isShow);
  };

  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  // | Mark Up
  // |-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=*
  return (
    <div style={{ width: "100%", height: "100%", backgroundColor: "yellow" }}>
      <div
        ref={boxRef}
        style={{
          backgroundColor: "red",
          width: "3rem",
          height: "3rem",
          position: "relative",
        }}
      >
        <p
          onClick={toggle}
          style={{
            backgroundColor: "red",
            width: "3rem",
            height: "3rem",
          }}
        >
          hello
        </p>
        {isShow && (
          <div
            style={{
              position: "absolute",
              top: "3rem",
              backgroundColor: "blue",
              width: "3rem",
              height: "5rem",
            }}
          ></div>
        )}
      </div>
    </div>
  );
};
