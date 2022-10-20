import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {cardProps} from "@/noddle-components/card/types";
export default (props: cardProps) => {
    const {children} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container: true
    })
    return (
        <div className={class_container}>
            {children}
        </div>
    )
}