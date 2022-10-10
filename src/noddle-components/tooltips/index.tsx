import STYLE from './index.module.less'
import _Tooltips from "@/noddle-components/tooltips/types";
import {CSSProperties, useEffect, useRef, useState} from "react";

export default (props: _Tooltips.tooltipsProps) => {
    const {children} = props
    const hiddenRef = useRef(null) as any
    const [tipsHeight, setTipsHeight] = useState(0)
    const style_tips = {
        transform: `translateY(-${tipsHeight + 8}px)`
    } as CSSProperties
    useEffect(() => {
        console.log(hiddenRef.current.offsetHeight)
        setTipsHeight(hiddenRef.current.offsetHeight)
    },[])
    return (
        <div className={STYLE.container}>
            <div className={STYLE.tips} ref={hiddenRef} style={style_tips}>
                1123
            </div>
            {children}
        </div>
    )
}