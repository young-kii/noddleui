import React, {useContext} from "react";
import {contextType, globalContext} from "@/components/globalConfig/Config";

export namespace LocaleConfig {
    export function setLocale(_locale:string) {
        const context = useContext(globalContext)
        const {setLocale} = context as contextType
        setLocale(_locale)
    }
    export function LocaleOption() {
        const context = useContext(globalContext)
        const {locale,setLocale} = context as contextType
        return (
            <>
                当前:{locale}
                <button onClick={()=>setLocale('en')}>📚</button>
            </>
        )
    }
}