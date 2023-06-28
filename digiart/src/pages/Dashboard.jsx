import React, { useState } from "react";
import { Avatar } from "@mui/material";
import logo from "../img/logo.png";

function Art(props) {
  props = { src: logo, title: "Title", description: "This is a description" };

  return (
    <>
      <div className="flex flex-col w-[100%] m-[1rem]">
        <div className="flex item-center w-[17rem] h-[17rem]">
          <img src={props.src} className="w-[100%]" />

          <div className="absolute w-[17rem] h-[17rem] bg-black bg-opacity-50 border-2"></div>

          <div className="absolute flex flex-col">
            <h1 className="text-xl font-bold">{props.title}</h1>
            <p className="text-base">{props.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

function Tabs() {
  const [tab, setTab] = useState(0);

  const tabNames = ["My arts", "Purchased arts", "Revenue"];

  const tabHeads = tabNames.map((tabName, i) => {
    return (
      <li
        key={tabName}
        className={
          tab == i
            ? "p-4 border-b-2 border-sky-500 cursor-pointer"
            : "p-4 cursor-pointer"
        }
        onClick={() => setTab(i)}
      >
        {tabName}
      </li>
    );
  });

  const tabs = [
    <Art />,
    <>
      <h2>Hello</h2>
    </>,
  ];

  return (
    <>
      <ul className="flex w-[100%] justify-center border-b-2">{tabHeads}</ul>
      <div>{tabs[tab]}</div>
    </>
  );
}

export default function Dashboard() {
  const user = {
    name: "Abebe Kebede",
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-3 ">
          <Avatar>{user.name[0].toUpperCase()}</Avatar>
          <p className="mt-2">{user.name}</p>
        </div>

        <Tabs />
      </div>
    </>
  );
}
