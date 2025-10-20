import type {Character} from "@/entities/character/model/character.ts";
import {type ReactNode} from "react";

interface Props {
  items: Character[];
  renderItem: (item: Character) => ReactNode;
}

export const CharacterList = ({
  items, renderItem
}: Props) => {
  if (!items.length) {
      return <div className="text-sm text-muted-foreground mt-4">No results</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      {items.map(renderItem)}
    </div>
  );
};
