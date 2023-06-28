import React, { useState } from "react";
import { Avatar } from "@mui/material";

function Art(props) {
  // props = { src: logo, title: "Title", description: "This is a description" };

  return (
    <div className="flex items-center justify-center mt-12">
      <a className="relative block w-1/4 h-64 bg-gray-900 group" href="##">
        <div
          className="absolute bg-yellow-200 inset-0
                            w-full h-64 group-hover:opacity-50"
        >
          <div className="flex w-[100%] h-[100%] justify-evenly ites-center group-hover:opacity-0">
            <img src={props.src} alt="logo" className="rounded-full" />
          </div>
        </div>

        <div className="relative p-10">
          <div className="mt-2">
            {/* Hidden content */}
            <div
              className="transition-all transform
                                translate-y-8 opacity-0
                                group-hover:opacity-100
                                group-hover:translate-y-0"
            >
              <div className="p-2">
                <img src={props.src} width={100} className="rounded-full" />
                <p className="text-xl text-white">{props.title}</p>
                <button
                  className="px-4 py-2 text-sm
                                            text-white bg-red-400"
                >
                  View
                </button>
              </div>
            </div>
            {/* End of hidden content */}
          </div>
        </div>
      </a>
    </div>
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
      <div className="grid grid-cols-2 w-[100%]">{tabs[tab]}</div>
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
