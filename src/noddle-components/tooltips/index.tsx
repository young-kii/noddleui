import STYLE from './index.module.less'
import _Tooltips from "@/noddle-components/tooltips/types";
import {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";

export default (props: _Tooltips.tooltipsProps) => {
    const {children, tips} = props
    const hiddenRef = useRef(null) as any
    const [mouseEnter, setMouseEnter] = useState(false)
    const [tipsHeight, setTipsHeight] = useState(0)
    const style_tips = {
        transform: mouseEnter ? `translateY(-${tipsHeight + 12}px)` : `translateY(-${tipsHeight}px) scale(0.7)`
    } as CSSProperties

    const handleMouseEnter = () => {
        setMouseEnter(true)
    }
    const handleMouseLeave = () => {
        setMouseEnter(false)
    }
    useEffect(() => {
        setTipsHeight(hiddenRef.current?.offsetHeight)
    }, [])
    return (
        <div className={STYLE.container} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {
                tips ?
                    <div className={STYLE.tips} ref={hiddenRef} style={style_tips}>
                        {
                            tips
                        }
                    </div>
                    : <></>
            }
            {children}
        </div>
    )
}