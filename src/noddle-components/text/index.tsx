import STYLE from './index.module.less'
import {useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import _Text from "@/noddle-components/text/types";

export default (props: _Text.textProps) => {

    const {children} = props

    return (
        children ?
        <span className={STYLE.container}>
            {children}
        </span> : <></>
    )
}
