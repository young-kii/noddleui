import STYLE from './index.module.less'
import {switchProps} from "@/noddle-components/switch/types";
import {CSSProperties, forwardRef, MutableRefObject, useEffect, useRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {themeTypes} from "@/types";

export default forwardRef((props: switchProps, ref: any) => {
    const {theme} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [status, setStatus] = useState(false)
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const [containerWidth, setContainerWidth] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const getType = (): themeTypes => {
        if (theme) {
            return ["danger", "default", "primary", "warning", "success"].indexOf(theme) > -1 ? theme : "default"
        }
        return "default"
    }
    const class_container = styles({
        container: true,
        on: status
    })
    const class_ball = styles({
        ball: true
    })
    const style_ball = {
        transform: status ? `translateX(${containerWidth - containerHeight}px)` : 'none'
    } as CSSProperties
    const handleClick = () => {
        setStatus(!status)
    }
    useEffect(() => {
        setContainerWidth(containerRef.current.offsetWidth)
        setContainerHeight(containerRef.current.offsetHeight)
    }, [])
    return (
        <div ref={ref}>
            <div ref={containerRef} className={class_container} onClick={handleClick} data-theme={getType()}>
                <div className={class_ball} style={style_ball}/>
            </div>
        </div>
    )
})
