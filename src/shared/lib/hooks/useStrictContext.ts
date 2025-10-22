import {type Context, useContext} from "react";

export const useStrictContext = <T>(context: Context<Nullable<T>>): T => {
    const strictContext = useContext(context)

    if(strictContext === null) {
        throw new Error('NO STRICT CONTEXT')
    }

    return strictContext
}