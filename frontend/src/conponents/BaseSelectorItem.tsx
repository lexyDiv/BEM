import React from "react";
import rightVector from "../images/icon.png";
import { BaseUserSelect } from "./types/BaseUserSelect";
import { addBase } from "../functions/addBase";
import { Group } from "./types/Group";

function BaseSelectorItem({
  group,

  setSelectedBase,
  selectedBase,
  setShowBaseSelector,
}: {
  group: Group;
  selectedBase: Group[][];
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  setShowBaseSelector: (value: boolean) => void;
}): JSX.Element {
  return (
    <div
      className="selector__item"
      onClick={() =>
        addBase({ group, setSelectedBase, setShowBaseSelector, selectedBase })
      }
    >
      <h3 className="selector__name">{group.name}</h3>
      <img className="selector__vector" src={rightVector} alt="vector" />
    </div>
  );
}

export default BaseSelectorItem;
