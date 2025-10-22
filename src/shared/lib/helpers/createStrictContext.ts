import {createContext} from "react";

export const createStrictContext = <T>() => createContext<Nullable<T>>(null)