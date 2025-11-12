import { withServices } from '@/app/locator/Service.provider.tsx'
import { FavoritesPageContent } from '@/pages/FavoritesPage/FavoritesPageContent.tsx'

export const FavoritesPage = withServices(['CHARACTERS_STORE'])(FavoritesPageContent)
