import {context} from "./Config";
import React from "react";
export default () => {
    const a = React.useContext(context) as {lan:string}
    const languages:{[x:string]:any} = {
        zh: {

                young:'顾逸轩'

        },
        en: {

                young:'young'

        }
    }
    const language = languages[a.lan]
    return (value: string) => {
        return language[value]
    }
}