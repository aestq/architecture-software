import { withServices } from '@/app/locator/Service.provider.tsx'
import { CharactersPageContent } from '@/pages/CharactersPage/CharactersPageContent.tsx'

export const CharactersPage = withServices(['CHARACTERS_STORE'])(CharactersPageContent)
