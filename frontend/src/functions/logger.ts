import { Group } from "../conponents/types/Group";

export function logger({ selectedBase }: { selectedBase: Group[][] }): void {
  selectedBase.forEach((group) => console.log(group.map((el) => el.id)));
}
