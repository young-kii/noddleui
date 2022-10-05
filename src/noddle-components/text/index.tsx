import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import _Text from "@/noddle-components/text/types";
import {CSSProperties} from "react";

export default (props: _Text.textProps) => {

    const {children, type, pure, bolder, decoration, lineType, isButton, onClick, fontSize, color, noWrap} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_container = {
        fontSize,
        color
    } as CSSProperties
    const class_container = styles({
        container: true,
        [`${type || 'default'}`]: true,
        pure,
        bolder,
        noWrap: typeof noWrap === "boolean" ? noWrap : false,
        [`${decoration || 'none'}`]: true,
        [`${lineType || 'solid'}`]: true,
        isButton
    })
    return (
        children ?
        <span className={class_container} style={style_container} onClick={isButton ? onClick : () => {} }>
            {children}
        </span> : <></>
    )
}
