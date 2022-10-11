import STYLE from './index.module.less'
import _Tooltips from "@/noddle-components/tooltips/types";
import {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {getPropertyValue, sizes_font, sizes_font_map, themes_array, themeTypes} from "@/types";

export default (props: _Tooltips.tooltipsProps) => {
    const {children, tips, theme, size, handleMouseEnter, handleMouseLeave} = props
    const hiddenRef = useRef(null) as any
    const [mouseEnter, setMouseEnter] = useState(false)
    const [tipsHeight, setTipsHeight] = useState(0)
    const getTheme = ():themeTypes => {
        if (theme)
            return themes_array.indexOf(theme) > -1 ? theme : 'default'
        return 'default'
    }
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container: true,
    })
    const class_tips = styles({
        tips: true,
        [`${getTheme()}`]: true
    })
    const style_tips = {
        fontSize: sizes_font_map[getPropertyValue(size,sizes_font,'medium')],
        transform: mouseEnter ? `translateY(-${tipsHeight + 12}px)` : `translateY(-${tipsHeight}px) scale(0.7)`
    } as CSSProperties

    const onMouseEnter = () => {
        handleMouseEnter?.()
        setMouseEnter(true)
    }
    const onMouseLeave = () => {
        handleMouseLeave?.()
        setMouseEnter(false)
    }
    useEffect(() => {
        setTipsHeight(hiddenRef.current?.offsetHeight)
    }, [])
    return (
        <div className={class_container} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                tips ?
                    <div className={class_tips} ref={hiddenRef} style={style_tips}>
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