import STYLE from './index.module.less'
import _Tooltips from "@/noddle-components/tooltips/types";
import {CSSProperties, forwardRef, MutableRefObject, useEffect, useRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import { size, sizes_Base, sizes_font, sizes_font_map, themes_array, themeTypes} from "@/types/common";
import {getPropertyValue} from "@/utils";

export default (props: _Tooltips.tooltipsProps) => {
    const {children, tips, theme, size, handleMouseEnter, handleMouseLeave} = props
    const tipsRef = useRef(null) as any
    const containerRef = useRef(null) as any
    const [mouseEnter, setMouseEnter] = useState(false)
    const [tipsHeight, setTipsHeight] = useState(0)
    const [tipsWidth, setTipsWidth] = useState(0)
    const [containerWidth, setContainerWidth] = useState(0)
    const [containerStyle, setContainerStyle] = useState({})
    const [childrenDisplay, setChildrenDisplay] = useState('')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const getTheme = (): themeTypes => {
        return getPropertyValue(theme, themes_array, 'default')
    }
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container: true,
    })
    const style_container = {
        ...containerStyle
    } as CSSProperties
    const class_tips = styles({
        tips: true,
        [`${getTheme()}`]: true
    })
    const getTipsTransform = () => {
        return mouseEnter ?
            `translateY(-${tipsHeight + 12}px) translateX(${childrenDisplay === 'flex' ? 0 : ((containerWidth - tipsWidth) / 2)}px)`
            : `translateY(-${tipsHeight}px) translateX(${childrenDisplay === 'flex' ? 0 : ((containerWidth - tipsWidth) / 2)}px) scale(0.7)`
    }
    const style_tips = {
        fontSize: sizes_font_map[getPropertyValue(size, sizes_Base, 'medium')],
        transform: getTipsTransform()
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
        const setWidth = () => setWindowWidth(window.innerWidth)
        window.addEventListener('resize',setWidth)
        return () => {
            window.removeEventListener('resize',setWidth)
        }
    }, [])
    useEffect(() => {
        setTipsHeight(tipsRef.current?.offsetHeight)
        setTipsWidth(tipsRef.current?.offsetWidth)
        setContainerWidth(containerRef.current?.offsetWidth)
        const element = containerRef.current.childNodes[1]
        const elementStyle = element.style;
        const computedStyle = window.getComputedStyle(element)
        const display = computedStyle.display
        setChildrenDisplay(display)
        let elementStyles = {} as any
        for (let i of elementStyle) {
            elementStyles[i] = elementStyle[i]
        }
        const requiredProps = {
            width: elementStyles.width
        }
        const final = {
            ...requiredProps,
            display
        } as CSSProperties
        setContainerStyle(final)
    }, [windowWidth, tips])
    return (
        <div className={class_container} style={style_container} ref={containerRef} onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}>
            {
                tips ?
                    <div className={class_tips} ref={tipsRef} style={style_tips}>
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