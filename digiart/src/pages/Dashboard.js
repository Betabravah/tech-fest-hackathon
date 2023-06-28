import React from "react";
import { Avatar } from "@mui/material";

export default function Dashboard() {
  const currentUser = {
    name: "Firstname Lastname",
  };

  return (
    <>
      <div>
        <div>
          <Avatar>{currentUser.name[0].toUpperCase()}</Avatar>
          <p>{currentUser.name}</p>
        </div>
      </div>
    </>
  );
}
