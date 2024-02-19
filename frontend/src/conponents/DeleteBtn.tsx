import React from "react";
import cross from "../images/cross.png";
import { Group } from "./types/Group";

function DeleteBtn({
  index,
  setSelectedBase,
}: {
  index: number;
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
}): JSX.Element {
  return (
    <img
      className="selected__item"
      src={cross}
      alt="cross"
      onClick={() =>
        setSelectedBase((prev) => {
          prev[index].pop();
          !prev[index].length && prev.splice(index, 1);
          return [...prev];
        })
      }
    />
  );
}

export default DeleteBtn;
