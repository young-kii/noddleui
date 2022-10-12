import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {CSSProperties} from "react";
import {spaceProps} from "@/noddle-components/space/types";


export default (props: spaceProps) => {

    const {children, direction, gap, width, height, style, onClick} = props
    const newDirection = direction || 'horizontal'
    const newGap = gap === 0 ? 0 : (gap ? gap / 2 : 10)
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const container = styles({
        container: true,
        horizontal: newDirection === "horizontal",
        vertical: newDirection === "vertical"
    })
    const _style = {
        width,
        height
    } as CSSProperties
    return (
        <div className={container} style={{...style, ..._style}} onClick={onClick}>
            {children instanceof Array ? children.map((item, index, array) => {
                if (item)
                    return <div key={index}
                                className={STYLE.items}
                                style={
                                    newDirection === "horizontal" ? {
                                        marginLeft: index === 0 ? 0 : newGap,
                                        marginRight: index === (array.length - 1) ? 0 : newGap
                                    } : direction === "vertical" ? {
                                        marginTop: index === 0 ? 0 : newGap,
                                        marginBottom: index === (array.length - 1) ? 0 : newGap
                                    } : {}
                                }
                    >{item}</div>
                return ''
            }) : children
            }
        </div>
    )
}
