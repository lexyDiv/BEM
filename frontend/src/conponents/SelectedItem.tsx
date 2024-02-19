import React from "react";
import { Group } from "./types/Group";
import GroupSelector from "./GroupSelector";
import { Focus } from "./types/Focus";
import right from "../images/right.png";
import DeleteBtn from "./DeleteBtn";

function SelectedItem({
  item,
  selected,
  setShowBaseSelector,
  setSelectedBase,
  index,
  setFocusGroup,
  focusGroup,
  groupIndex,
}: {
  item: Group;
  selected: Group[];
  setShowBaseSelector: (value: boolean) => void;
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  index: number;
  setFocusGroup: (value: Focus) => void;
  focusGroup: Focus;
  groupIndex: number;
}): JSX.Element {
  const showGroupSelector =
    focusGroup &&
    focusGroup.index === index &&
    focusGroup.id === item.id &&
    item.groups.length;

  return (
    <>
      <div
        className="selected__item"
        onClick={(e) => {
          e.stopPropagation();
          !focusGroup || focusGroup.id !== item.id || index !== focusGroup.index
            ? setFocusGroup({ index, id: item.id })
            : setFocusGroup(false);
          setShowBaseSelector(false);
        }}
      >
        <h2 className="selected__name">{item.name}</h2>
        {showGroupSelector ? (
          <GroupSelector
            group={item}
            setSelectedBase={setSelectedBase}
            selected={selected}
            index={index}
            setFocusGroup={setFocusGroup}
            groupIndex={groupIndex}
          />
        ) : (
          false
        )}
      </div>
      {groupIndex < selected.length - 1 ? (
        <img className="selected__item" src={right} alt="right" />
      ) : (
        <DeleteBtn index={index} setSelectedBase={setSelectedBase} />
      )}
    </>
  );
}

export default SelectedItem;
