import type {Character} from "@/entities/character/model/character.ts";
import {Card, CardContent, CardTitle} from "@/shared/ui/card.tsx";
import {cn} from "@/shared/lib/cn.ts";
import type {ReactNode} from "react";

interface Props {
  character: Character;
  favoriteButton?: ReactNode
}

export const CharacterCard = ({
  character, favoriteButton
}: Props) => {
  return (
    <Card
      className={cn(
        "overflow-hidden relative rounded-2xl shadow-md transition hover:shadow-lg p-0",
      )}
    >
      <div className="relative w-full h-48">
        <img
          src={character.image}
          alt={character.name}
          loading="lazy"
          className={cn("w-full h-full object-cover")}
        />

          {favoriteButton}
      </div>

      <CardContent className={cn("p-4")}>
        <CardTitle className={cn("mb-1 text-lg")}>{character.name}</CardTitle>
        <div className={cn("text-sm text-muted-foreground")}>
          {character.species} • {character.status}
        </div>
      </CardContent>
    </Card>
  );
};
