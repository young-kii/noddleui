import React, {createContext, useContext, useState} from "react";
import Select, {Option} from "@/noddle-components/select";

const localStorage_localeKey = 'noddle-locale'

export const globalContext = createContext({})
export type _object = { [key: string]: any }
export type contextType = {
    locale: string;
    Locales: _object;
    setLocale?: any;
    languages: _object

}

interface Locales {
    defaultLocale: string,
    allLocales: _object,
    languages: _object
}

interface configProps {
    children?: any;
    Locales?: Locales
}


export const Config = ({children, Locales}: configProps) => {
    const {Provider} = globalContext
    if(Locales)
    {
        const {defaultLocale, allLocales, languages} = Locales as Locales
        const initLocale: string = localStorage.getItem(localStorage_localeKey) || defaultLocale
        const [locale, setLocale] = useState(initLocale)
        return (
            <Provider value={{locale, setLocale, Locales: allLocales, languages}}>
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
            if (value) {
                const keys = value.split('.')
                const result = keys.reduce((pre: _object, cur: string) => {
                    if (pre && pre.hasOwnProperty(cur)) {
                        return pre[cur]
                    }
                    return value
                }, language)
                return typeof result === 'string' ? result : value
            }
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
        const {locale, languages} = context as contextType
        const [_value,_setValue] = useState(locale)
        const localeList = []
        let index = 0
        for(let key in languages) {
            localeList.push({id: index++ , value:key, label: languages[key]})
        }
        if (!Object.keys(context).includes('locale') || !Object.keys(context).includes('Locales') )
            return (<div>locale not found !</div>)
        return (
            <>
                <Select autoWidth={true} initValue={locale} value={_value} readonly>
                    {
                        localeList.map(item => {
                            return <Option key={item.id} value={item.value} selected={locale === item.value}  onClick={()=>{setLocale(item.value);_setValue(item.value)}}>{item.label}</Option>
                        })
                    }
                </Select>
            </>
        )
    }
}