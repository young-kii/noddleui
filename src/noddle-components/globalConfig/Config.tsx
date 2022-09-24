import {createContext, useContext, useState} from "react";
import Select, {Option} from "@/noddle-components/select";
import {configProps, Locales, contextType, _object} from "@/noddle-components/globalConfig/types";
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
                let lan = language
                const keys = value.split('.')
                const result = keys.reduce((pre: _object, cur: string, currentIndex, array) => {
                    if (currentIndex === array.length - 1) {
                        if (lan[cur])
                            if (lan[cur][''])
                                return lan[cur]['']
                    }
                    if (pre && pre.hasOwnProperty(cur)) {
                        lan = language[cur]
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
        return (
            <>
                <Select autoWidth initValue={locale} value={locale} readonly
                        onChange={(value) => {
                            setLocale(value.value)
                        }}>
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

export namespace ClassNameConfig {
    export function classNames(props: any) {
        let result = ''
        for(let key in props){
            result += (' ' + ( props[key] ? key : '' ))
        }
        return result
    }
    export function mClassNames(this: CSSModuleClasses, props: _object) {
            let result = ''
            for(let key in props){
                result += (' ' + ( props[key] ? this[key] : '' ))
            }
            return result
    }
}
