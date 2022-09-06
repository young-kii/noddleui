import {createContext, useContext, useState} from "react";
import Select, {Option} from "@/noddle-components/select";
import {configProps, Locales, contextType, _object} from "@/noddle-components/globalConfig/index.d";

const localStorage_localeKey = 'noddle-locale'

export const globalContext = createContext({})

export const Config = ({children, Locales}: configProps) => {
    const {Provider} = globalContext
    if (Locales) {
        const {defaultLocale, allLocales, languages} = Locales as Locales
        const initLocale: string = localStorage.getItem(localStorage_localeKey) || defaultLocale
        const [locale, setLocale] = useState(initLocale)
        return (
            <Provider value={{locale, setLocale, Locales: allLocales, languages}}>
                {children}
            </Provider>
        )
    } else return (<Provider value={{}}>
        {children}
    </Provider>)
}

export const useTranslation = () => {
    const context = useContext(globalContext)
    if (!Object.keys(context).includes('locale') || !Object.keys(context).includes('Locales'))
        return () => {
            return 'locale not found !'
        }
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
            localStorage.setItem(localStorage_localeKey, _locale)
            setLocale(_locale)
        }
    }

    export function LocaleOption() {
        const context = useContext(globalContext)
        const {locale, languages} = context as contextType
        const setLocale = LocaleConfig.useSetLocale()
        const localeList = []
        let index = 0
        for (let key in languages) {
            localeList.push({id: index++, value: key, label: languages[key]})
        }
        if (!Object.keys(context).includes('locale') || !Object.keys(context).includes('Locales'))
            return (<div>locale not found !</div>)
        const handleChange = () => {

        }
        return (
            <>
                <Select autoWidth initValue={locale} value={locale} readonly
                        onChange={(value) => setLocale(value.value)}>
                    {
                        localeList.map(item => {
                            return <Option key={item.id} value={item.value}>{item.label}</Option>
                        })
                    }
                </Select>
            </>
        )
    }
}