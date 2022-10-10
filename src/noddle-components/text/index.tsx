import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import _Text from "@/noddle-components/text/types";
import {CSSProperties, forwardRef} from "react";

export default forwardRef((props: _Text.textProps, ref: any) => {

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
        bolder: typeof bolder === 'boolean' ? bolder : false,
        noWrap: typeof noWrap === "boolean" ? noWrap : false,
        [`${decoration || 'none'}`]: true,
        [`${lineType || 'solid'}`]: true,
        isButton
    })
    return (
            children ?
            <span ref={ref} className={class_container} style={style_container} onClick={isButton ? onClick : () => {
            }}>
            {children}
        </span> : <></>
    )
})
