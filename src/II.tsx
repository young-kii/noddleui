import React, {ReactNode, useContext, useEffect} from "react";
import {useTranslation,globalContext} from "./components/globalConfig/Config";
import {LocaleConfig} from "@/components/localeConfig/index.d";
const {LocaleOption} = LocaleConfig
export default (props: { children?: ReactNode|null }) => {
    const {children} = props
    const translate = useTranslation()
    return (
        <div>
            <LocaleOption/>
            title:{translate('person.young.name')}

        </div>
    )
}