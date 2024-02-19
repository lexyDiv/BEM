import { Group } from "../conponents/types/Group";

export function getGroup({
  groups,
  arrId,
  arr,
  terration,
}: {
  groups: Group[];
  arrId: number[];
  arr: Group[];
  terration: number;
}): Group[] {
  const id = arrId[terration];

  terration += 1;
  const group = groups.find((el) => el.id === id);

  if (group) {
    arr.push(group);
    group.groups.length &&
      getGroup({ groups: group.groups, arrId, arr, terration });
  }
  return arr;
}
