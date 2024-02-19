import { BaseUserSelect } from "../conponents/types/BaseUserSelect";
import { Group } from "../conponents/types/Group";

export function addBase({
  group,
  setSelectedBase,
  selectedBase,
  setShowBaseSelector,
}: {
  group: Group;
  selectedBase: Group[][];
  setSelectedBase: (value: (value: Group[][]) => Group[][]) => void;
  setShowBaseSelector: (value: boolean) => void;
}): void {
  const base = selectedBase.find((el: Group[]) => el[0].id === group.id);

  setShowBaseSelector(false);
  if (!base) {
    setSelectedBase((prev) => [...prev, [group]]);
  }
}
