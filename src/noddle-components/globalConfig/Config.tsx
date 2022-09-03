import React, {createContext, useContext, useState} from "react";
import content from "@/layout/content";

const localStorage_localeKey = 'noddle-locale'

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
    if(Locales)
    {
        const {defaultLocale, allLocales} = Locales as Locales
        const initLocale: string = localStorage.getItem(localStorage_localeKey) || defaultLocale
        const [locale, setLocale] = useState(initLocale)
        return (
            <Provider value={{locale: locale, setLocale: setLocale, Locales: allLocales}}>
                {children}
            </Provider>
        )
    }
    else return (<Provider  value={{}}>
        {children}
    </Provider>)
}

export const useTranslation = () => {
    const context = React.useContext(globalContext)
    if (!Object.keys(context).includes('locale') || !Object.keys(context).includes('Locales') )
        return () => {
            return 'locale not found !'
        }
    console.log(Object.keys(context))
    const {locale, Locales} = context as contextType
    const language = Locales[locale]
    return (value: string) => {
        if (language) {
            const keys = value.split('.')
            const result = keys.reduce((pre: _object, cur: string) => {
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

export namespace LocaleConfig {
    export function useSetLocale() {
        const context = useContext(globalContext)
        const {setLocale} = context as contextType
        return (_locale: string) => {
            localStorage.setItem(localStorage_localeKey,_locale)
            setLocale(_locale)
        }
    }

    export function LocaleOption() {
        const context = useContext(globalContext)
        const setLocale = useSetLocale()
        const {locale} = context as contextType
        if (!Object.keys(context).includes('locale') || !Object.keys(context).includes('Locales') )
            return (<div>locale not found !</div>)
        return (
            <>
                当前:{locale}
                <button onClick={() => setLocale('en')}>📚</button>
            </>
        )
    }
}