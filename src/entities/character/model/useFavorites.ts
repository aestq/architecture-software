import {useCallback, useState} from "react";
import type {Character} from "./character.ts";
import {useDidUpdate} from "@/shared/lib/hooks/useDidUpdate.ts";
import type {StorageRepository} from "@/shared/lib/storages/storageRepository.ts";

const LS_KEY = "favorites_characters_v1";

type Favorites = Record<number, Character>

interface UseFavoritesProps {
    storage: StorageRepository
}

export function useFavorites(props: UseFavoritesProps) {
    const { storage } = props
  const [favorites, setFavorites] = useState<Favorites>(() => storage.get<Favorites>(LS_KEY) ?? {})

    useDidUpdate(() => {
        storage.set(LS_KEY, favorites);
    }, [favorites]);

  const isFavorite = useCallback(
    (id: number) => Boolean(favorites[id]),
    [favorites],
  );

  const toggleFavorite = useCallback((char: Character) => {
    setFavorites((prev) => {
      const next = { ...prev };
      if (next[char.id]) delete next[char.id];
      else next[char.id] = char;
      return next;
    });
  }, []);

  const clearFavorites = useCallback(() => setFavorites({}), []);

  const list = Object.values(favorites);

  return { favorites, list, isFavorite, toggleFavorite, clearFavorites };
}
