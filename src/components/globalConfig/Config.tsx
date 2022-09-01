import React, {createContext, useState} from "react";


export const globalContext = createContext({})
export type _object = { [key: string]: any }
export type contextType = {
    locale: string;
    Locales: _object;
    setLocale?: any;
}

interface Locales {
    defaultLocale: string,
    allLocales: _object
}

interface configProps {
    children?: any;
    Locales?: Locales
}

export const Config = ({children, Locales}: configProps) => {
    const {Provider} = globalContext
    const {defaultLocale, allLocales} = Locales as Locales
    const initLocale: string = localStorage.getItem('locale') || defaultLocale
    const [locale, setLocale] = useState(initLocale)
    return (
        <Provider value={{locale: locale, setLocale: setLocale, Locales: allLocales}}>
            {children}
        </Provider>
    )
}

export const useTranslation = () => {
    const context = React.useContext(globalContext)
    const {locale, Locales} = context as contextType
    const language = Locales[locale]
    return (value: string) => {
        if (language) {
            const keys = value.split('.')
            const result = keys.reduce((pre: _object , cur:string) => {
                if (pre && pre.hasOwnProperty(cur)) {
                    return pre[cur]
                }
                return value
            }, language)
            return typeof result === 'string' ? result : value
        }
        return value
    }
}