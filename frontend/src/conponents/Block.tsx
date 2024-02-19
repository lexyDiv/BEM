import React, { useState } from "react";

import MoreBtn from "./MoreBtn";
import BaseSelector from "./BaseSelector";
import Selected from "./Selected";
import { Group } from "./types/Group";
import { stateArrey } from "../state/stateArrey";
import { Focus } from "./types/Focus";
import GoBtn from "./GoBtn";

function Block(): JSX.Element {
  const [selectedBase, setSelectedBase] = useState<Group[][]>([]);
  const [showBaseSelector, setShowBaseSelector] = useState<boolean>(false);
  const [focusGroup, setFocusGroup] = useState<Focus>(false);

  return (
    <div className="block" onClick={() => setFocusGroup(false)}>
      {selectedBase.map((selected, index) => (
        <Selected
          key={selected[0].id}
          selected={selected}
          setSelectedBase={setSelectedBase}
          setShowBaseSelector={setShowBaseSelector}
          setFocusGroup={setFocusGroup}
          index={index}
          focusGroup={focusGroup}
        />
      ))}
      {showBaseSelector && (
        <BaseSelector
          group={stateArrey}
          selectedBase={selectedBase}
          setSelectedBase={setSelectedBase}
          setShowBaseSelector={setShowBaseSelector}
        />
      )}
      <MoreBtn setShowBaseSelector={setShowBaseSelector} />
      {selectedBase.length ? (
        <GoBtn
          selectedBase={selectedBase}
          setSelectedBase={setSelectedBase}
          setFocusGroup={setFocusGroup}
        />
      ) : (
        false
      )}
    </div>
  );
}

export default Block;
