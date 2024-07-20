import React from "react";
import { SearchBar } from "./searchbar";
// import { ToogleBar } from './ToggleBar'

export default function AppBar() {
  return (
    <div className={"flex justify-between p-3 pt-2"}>
      <div className={"text-md inline-flex pd-2 items-center"}>Youtube</div>
      <div className="col-1">{<SearchBar />}</div>
      <div className="col-1">Sign in</div>
    </div>
  );
}
