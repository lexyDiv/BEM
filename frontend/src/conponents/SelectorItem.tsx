import React from "react";
import { Group } from "./types/Group";
import rightVector from "../images/icon.png";
import { Focus } from "./types/Focus";

function SelectorItem({
  group,
  setSelectedBase,
  selected,
  setFocusGroup,
  groupIndex,
}: {
  group: Group;
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  selected: Group[];
  index: number;
  setFocusGroup: (value: Focus) => void;

  groupIndex: number;
}): JSX.Element {
  return (
    <div
      className="selector__item"
      onClick={() => {
        setFocusGroup(false);
        setSelectedBase((prev) => {
          const targetGroup = prev.find((el) => el[0].id === selected[0].id);
          if (targetGroup) {
            targetGroup.splice(groupIndex + 1);
            targetGroup.push(group);
          }
          return [...prev];
        });
      }}
    >
      <h3 className="selector__name">{group.name}</h3>
      <img className="selector__vector" src={rightVector} alt="vector" />
    </div>
  );
}

export default SelectorItem;
