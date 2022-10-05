import STYLE from './index.module.less'
import _Divider from "@/noddle-components/divider/types";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {CSSProperties} from "react";

export default (props: _Divider.dividerProps) => {
    /**
     * default backgroundColor : #DCDCDCFF
     */
    const {spacing, position, children, direction, color, thickness} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const getDirection = () => {
        if (direction)
            return ['horizontal', 'vertical'].indexOf(direction) > -1 ? direction : 'horizontal'
        return 'horizontal'
    }
    const class_container = styles({
        container: true,
        [`${getDirection()}_container`]: true
    })
    const class_startLine = styles({
        startLine: true,
        [`${getDirection()}_line`]: true
    })
    const class_endLine = styles({
        endLine: true,
        [`${getDirection()}_line`]: true
    })
    const style_startLine = {
        flex: position === 'start' ? 1 : (position === 'end' ? 10000 : 1),
        minWidth: direction === 'horizontal' ?
            (position === 'start' ? (spacing && spacing > 50) ? '50%' : spacing + '%' : 16)
            : thickness,
        minHeight: direction === 'vertical' ?
            (position === 'start' ? (spacing && spacing > 50) ? '50%' : spacing + '%' : 16)
            : thickness,
        backgroundColor: color
    } as CSSProperties
    const style_endLine = {
        flex: position === 'end' ? 1 : (position === 'start' ? 10000 : 1),
        minWidth: direction === 'horizontal' ?
            position === 'end' ? (spacing && spacing > 50) ? '50%' : spacing + '%' : 16
            : thickness,
        minHeight: direction === 'vertical' ?
            (position === 'end' ? (spacing && spacing > 50) ? '50%' : spacing + '%' : 16)
            : thickness,
        backgroundColor: color
    } as CSSProperties
    const renderChildren = () => {
        return children ? (
            <div className={STYLE.children}>
                {children}
            </div>
        ) : <></>
    }
    return (
        <div className={class_container}>
            <div className={class_startLine} style={style_startLine}/>
            {renderChildren()}
            <div className={class_endLine} style={style_endLine}/>
        </div>
    )
}