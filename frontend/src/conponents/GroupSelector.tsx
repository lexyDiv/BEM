import React from "react";
import { Group } from "./types/Group";
import SelectorItem from "./SelectorItem";
import { Focus } from "./types/Focus";

function GroupSelector({
  group,
  setSelectedBase,
  selected,
  index,
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
    <div className="group-selector block__group-selector selector">
      {group.groups.map((el) => (
        <SelectorItem
          key={el.id}
          group={el}
          setSelectedBase={setSelectedBase}
          selected={selected}
          index={index}
          setFocusGroup={setFocusGroup}
          groupIndex={groupIndex}
        />
      ))}
    </div>
  );
}

export default GroupSelector;
