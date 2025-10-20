import {type DependencyList, type EffectCallback, useEffect} from 'react';

import { useRef } from 'react';


/**
 * @name useDidUpdate
 * @description – Hook that triggers the effect callback on updates
 * @category Lifecycle
 * @usage necessary

 * @param {EffectCallback} effect The effect callback
 * @param {DependencyList} [deps] The dependencies list for the effect
 *
 * @example
 * useDidUpdate(() => console.log("effect runs on updates"), deps);
 */
export const useDidUpdate = (effect: EffectCallback, deps?: DependencyList) => {
    const mounted = useRef(false);

    useEffect(
        () => () => {
            mounted.current = false;
        },
        []
    );

    useEffect(() => {
        if (mounted.current) {
            return effect();
        }

        mounted.current = true;
        return undefined;
    }, deps);
};
