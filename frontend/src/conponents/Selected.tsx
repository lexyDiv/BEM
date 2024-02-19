import React from "react";
import SelectedItem from "./SelectedItem";

import { Group } from "./types/Group";
import { Focus } from "./types/Focus";

function Selected({
  selected,
  setSelectedBase,
  setShowBaseSelector,
  index,
  setFocusGroup,
  focusGroup,
}: {
  selected: Group[];
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  setShowBaseSelector: (value: boolean) => void;
  index: number;
  setFocusGroup: (value: Focus) => void;
  focusGroup: Focus;
}): JSX.Element {
  return (
    <div className="selected block_selected">
      {selected.map((group, groupIndex) => (
        <SelectedItem
          key={group.id}
          item={group}
          selected={selected}
          setSelectedBase={setSelectedBase}
          setShowBaseSelector={setShowBaseSelector}
          index={index}
          setFocusGroup={setFocusGroup}
          focusGroup={focusGroup}
          groupIndex={groupIndex}
        />
      ))}
    </div>
  );
}

export default Selected;
