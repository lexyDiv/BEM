import React from "react";
import { stateArrey } from "../state/stateArrey";
import BaseSelectorItem from "./BaseSelectorItem";
import { BaseUserSelect } from "./types/BaseUserSelect";
import { Group } from "./types/Group";

function BaseSelector({
  group,
  selectedBase,
  setSelectedBase,
  setShowBaseSelector,
}: {
  group: Group[];
  selectedBase: Group[][];
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  setShowBaseSelector: (value: boolean) => void;
}): JSX.Element {
  return (
    <div className="selector block__selector">
      {group.map((baseSelectorItem) => (
        <BaseSelectorItem
          key={baseSelectorItem.id}
          group={baseSelectorItem}
          selectedBase={selectedBase}
          setSelectedBase={setSelectedBase}
          setShowBaseSelector={setShowBaseSelector}
        />
      ))}
    </div>
  );
}

export default BaseSelector;
