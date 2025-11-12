import { type ComponentType, type FC, type ReactNode, useState } from 'react'
import { getLocator, type ServiceKey } from './useLocator'
import { createStrictContext } from '@/shared/lib/helpers/createStrictContext'
import { useStrictContext } from '@/shared/lib/hooks/useStrictContext'

interface ServiceProviderProps<Tokens extends readonly ServiceKey[]> {
    tokens: Tokens
    children: ReactNode
}

type ServicesContextValue = Partial<Record<ServiceKey, unknown>>

const ServicesContext = createStrictContext<ServicesContextValue>()

export function useService<T extends ServiceKey>(token: T) {
    const context = useStrictContext(ServicesContext)
    const service = context[token]

    if (!service) {
        throw new Error(`Сервис "${token}" не был найден ServiceProvider.`)
    }

    return service as ReturnType<typeof getLocator<T>>
}

export function ServiceProvider<Tokens extends readonly ServiceKey[]>({ tokens, children }: ServiceProviderProps<Tokens>) {
    const [services] = useState(() => {
        const result: ServicesContextValue = {}
        for (const token of tokens) {
            result[token] = getLocator(token)
        }
        return result
    })

    return <ServicesContext.Provider value={services}>{children}</ServicesContext.Provider>
}

export function withServices<Tokens extends readonly ServiceKey[]>(tokens: Tokens) {
    return function <P extends object>(Component: ComponentType<P>): FC<P> {
        const Wrapped: FC<P> = (props) => (
            <ServiceProvider tokens={tokens}>
                <Component {...props} />
            </ServiceProvider>
        )

        Wrapped.displayName = `withServices(${Component.displayName ?? Component.name ?? 'Component'})`

        return Wrapped
    }
}
