import {spaceProps} from "@/noddle-components/space/types";
import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";


export default (props: spaceProps) => {

    const {children, direction, gap} = props
    const newDirection = direction || 'horizontal'
    const newGap = gap ? gap/2 : 4
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const container = styles({
        container: true,
        horizontal: newDirection === "horizontal",
        vertical: newDirection === "vertical"
    })
    return (
        <div className={container}>
            {children instanceof Array ? children.map((item, index, array) => {
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
            }) : children
            }
        </div>
    )
}
