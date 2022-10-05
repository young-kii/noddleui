import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import _Text from "@/noddle-components/text/types";
import {CSSProperties} from "react";

export default (props: _Text.textProps) => {

    const {children, type, pure, bolder, decoration, lineType, isButton, onClick, fontSize, color} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style = {
        fontSize,
        color
    } as CSSProperties
    const style_container = styles({
        container: true,
        [`${type || 'default'}`]: true,
        pure,
        bolder,
        [`${decoration || 'none'}`]: true,
        [`${lineType || 'solid'}`]: true,
        isButton
    })
    return (
        children ?
        <span className={style_container} style={style} onClick={isButton ? onClick : () => {} }>
            {children}
        </span> : <></>
    )
}
