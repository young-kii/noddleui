import STYLE from './index.module.less'
import _Divider from "@/noddle-components/divider/types";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {CSSProperties} from "react";

export default (props: _Divider.dividerProps) => {
    /**
     * default backgroundColor : #DCDCDCFF
     */
    const {spacing, position, children, direction, color, thickness, width, height} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const getDirection = () => {
        if (direction)
            return ['horizontal', 'vertical'].indexOf(direction) > -1 ? direction : 'horizontal'
        return 'horizontal'
    }
    const style_container = {
        width,
        height
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
    const getMinWidth = (lineType: 'start' | 'end') => {
        if (lineType === 'start') {
            if (typeof spacing === "string" && spacing.includes('px'))
                return getDirection() === 'horizontal' ? spacing : thickness
            else return getDirection() === 'horizontal' ?
                (position === 'start' ? ((spacing && spacing > 50) ? '50%' : spacing + '%') : 16)
                : thickness
        } else if (lineType === 'end') {
            if (typeof spacing === "string" && spacing.includes('px'))
                return getDirection() === 'horizontal' ? spacing : thickness
            else return getDirection() === 'horizontal' ?
                    position === 'end' ? ((spacing && spacing > 50) ? '50%' : spacing + '%') : 16
                    : thickness
        }
    }

    const getMinHeight = (lineType: 'start' | 'end') => {
        if (lineType === "start") {
            if (typeof spacing === "string" && spacing.includes('px'))
                return getDirection() === 'vertical' ? spacing : thickness
            else return getDirection() === 'vertical' ?
                    (position === 'start' ? ((spacing && spacing > 50) ? '50%' : spacing + '%' ): 16)
                    : thickness

        } else if (lineType === "end") {
            if (typeof spacing === "string" && spacing.includes('px'))
                return getDirection() === 'vertical' ? spacing : thickness
            else return getDirection() === 'vertical' ?
                (position === 'end' ? ((spacing && spacing > 50) ? '50%' : spacing + '%') : 16)
                : thickness
        }
    }

    const style_startLine = {
        flex: position === 'start' ? 1 : (position === 'end' ? 10000 : 1),
        minWidth: getMinWidth("start"),
        minHeight: getMinHeight("start"),
        backgroundColor: color
    } as CSSProperties
    const style_endLine = {
        flex: position === 'end' ? 1 : (position === 'start' ? 10000 : 1),
        minWidth: getMinWidth("end"),
        minHeight: getMinHeight("end"),
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
        <div className={class_container} style={style_container}>
            <div className={class_startLine} style={style_startLine}/>
            {renderChildren()}
            <div className={class_endLine} style={style_endLine}/>
        </div>
    )
}