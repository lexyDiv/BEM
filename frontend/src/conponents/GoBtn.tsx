import React from "react";
import { Group } from "./types/Group";
import { Focus } from "./types/Focus";
import { logger } from "../functions/logger";

function GoBtn({
  selectedBase,
  setSelectedBase,
  setFocusGroup,
}: {
  selectedBase: Group[][];
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  setFocusGroup: (value: Focus) => void;
}): JSX.Element {
  return (
    <button
      className="go-btn block__go-btn"
      onClick={() => {
        logger({ selectedBase });
        setFocusGroup(false);
        setSelectedBase((prev) => {
          prev = [];
          return [...prev];
        });
      }}
    >
      сохранить и продолжить
    </button>
  );
}

export default GoBtn;
