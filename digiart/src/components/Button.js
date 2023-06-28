import React from "react";

function Button(props) {
  return (
    <button
      className="bg-red-500 ml-[10px] px-[8px] py-[9px] text-[15px] font-bold text-white rounded-md hover:bg-red-400"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export { Button };
