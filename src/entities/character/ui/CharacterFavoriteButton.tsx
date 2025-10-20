import {cn} from "@/shared/lib/cn.ts";
import {Star} from "lucide-react";
import {Button} from "@/shared/ui/button.tsx";
import type {ComponentProps} from "react";

interface CharacterFavoriteButtonProps extends ComponentProps<'button'> {
    onToggleFavorite: () => void
    favorite: boolean
}

export const CharacterFavoriteButton = (props: CharacterFavoriteButtonProps) => {
    const {onToggleFavorite, favorite, className, ...otherProps} = props

    return (
        <Button
            variant="secondary"
            size="icon"
            className={cn(
                "absolute top-2 right-2 rounded-full shadow bg-white/80 hover:bg-white",
                className
            )}
            onClick={() => onToggleFavorite()}
            title={favorite ? "Remove from favorites" : "Add to favorites"}
            {...otherProps}
        >
            <Star
                className={cn("h-5 w-5", favorite && "fill-red-500 text-red-500")}
            />
        </Button>
    )
}