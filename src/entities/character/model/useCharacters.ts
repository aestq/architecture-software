import {useState} from "react";
import {useAsync} from "@/shared/lib/hooks/useAsync.ts";
import {useDebounceValue} from "@/shared/lib/hooks/useDebounceValue.ts";
import type {CharacterRepository} from "@/entities/character/repository/characterRepository.ts";

interface UseCharactersProps {
    repository: CharacterRepository
}

export function useCharacters(props: UseCharactersProps) {
    const {repository} = props
    const [query, setQuery] = useState('')

    const queryDebounced = useDebounceValue(query, 300)

  const characterAsync = useAsync(() => repository.fetchAllByName({
      config: {
          params: {
              name: queryDebounced
          }
      }
  }), [queryDebounced])

    return {
        query,
        setQuery,
        characterAsync,
    }
}
