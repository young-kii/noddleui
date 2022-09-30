import STYLE from './index.module.less'
import _Divider from "@/noddle-components/divider/types";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {CSSProperties} from "react";

export default (props: _Divider.dividerProps) => {
    const {spacing,position,children} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container: true
    })
    const class_leftLine = styles({
        leftLine: true
    })
    const class_rightLine = styles({
        rightLine: true
    })
    const style_leftLine = {
        flex: position === 'left' ? 1 : (position === 'right' ? 10000 : 1),
        minWidth: position === 'left' ? (spacing && spacing > 50 ) ? '50%' : spacing + '%' : 16
    } as CSSProperties
    const style_rightLine = {
        flex: position === 'right' ? 1 : (position === 'left' ? 10000 : 1),
        minWidth: position === 'right' ? (spacing && spacing > 50 ) ? '50%' : spacing + '%' : 16
    } as CSSProperties
    return (
        <div className={class_container}>
            <div className={class_leftLine} style={style_leftLine}/>
            <div className={STYLE.children}>
                {children}
            </div>
            <div className={class_rightLine} style={style_rightLine}/>
        </div>
    )
}