import type { Character } from "@/types/character";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface Props {
  character: Character;
  favorite: boolean;
  onToggleFavorite: (c: Character) => void;
}

export const CharacterCard = ({
  character,
  favorite,
  onToggleFavorite,
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

        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute top-2 right-2 rounded-full shadow bg-white/80 hover:bg-white",
          )}
          onClick={() => onToggleFavorite(character)}
          title={favorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Star
            className={cn("h-5 w-5", favorite && "fill-red-500 text-red-500")}
          />
        </Button>
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
