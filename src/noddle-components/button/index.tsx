import {baseButtonProps, buttonProps} from "./types";
import STYLE from './index.module.less'
import React, {CSSProperties, ForwardedRef, forwardRef, useEffect, useRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import { themes_array } from "@/types/common";
import {getPropertyValue} from "@/utils";

export default React.forwardRef((props: buttonProps, ref:ForwardedRef<HTMLElement>) => {

    const {children} = props

    return (
        <>
            <Button ref={ref} {...props}>{children}</Button>
        </>
    )
})

const Button = forwardRef((props: baseButtonProps, ref: any) => {

    const {children, onClick, type, border, disabled, backgroundStyle, widthFitsText, block} = props
    const [buttonWidth, setButtonWidth] = useState(0)
    const [click, setClick] = useState(false)
    const [onEffect_widthAndHeight, setOnEffect_widthAndHeight] = useState(false)
    const [onEffect_opacity, setOnEffect_opacity] = useState(false)
    const effectTimer = useRef(null) as any
    const effectTimer2 = useRef(null) as any
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const getType = () => {
        return getPropertyValue(type, themes_array, 'primary')
    }
    if (!ref)
        ref = useRef()

    const style_container = styles({
        container: true,
        click,
        disabled
    })

    const _style = {
        width: block ? '100%' : '',
        padding: widthFitsText ? 0 : 16,
        minWidth: widthFitsText ? 0 : 60
    }

    const style_effect = {
        width: onEffect_widthAndHeight ? buttonWidth * 1.5 : 0,
        height: buttonWidth * 2,
        opacity: onEffect_opacity ? 1 : 0
    } as CSSProperties

    /**
     * @see handleClick
     * @description 处理点击事件
     * @see disabled
     * @description 当disabled时为禁用状态，无法完成点击事件
     */

    const handleClick = (e: any) => {
        if (disabled)
            return null
        onClick?.(e)
        setOnEffect_widthAndHeight(true)
        setOnEffect_opacity(true)
        setClick(false)
        setTimeout(() => {
            setClick(true)
        }, 10)
        if(effectTimer.current)
        {
            clearTimeout(effectTimer.current)
            clearTimeout(effectTimer2.current)
        }
        effectTimer.current = setTimeout(() => {
            setOnEffect_opacity(false)
            effectTimer2.current = setTimeout(() => {
                setOnEffect_widthAndHeight(false)
            }, 300)
        }, 300)
    }
    const handleWindowResize = () => {
        setButtonWidth(ref?.current.offsetWidth)
    }
    useEffect(()=>{
        setButtonWidth(ref?.current.offsetWidth)
        window.addEventListener('resize',handleWindowResize)
        return () => {
            window.addEventListener('resize',handleWindowResize)
        }
    },[])

    return (
        <div ref={ref} className={style_container} style={_style} onClick={handleClick}
             data-buttontype={getType() || 'primary'}
             data-bordertype={border || 'default'}
             // data-clickeffect={clickEffect || 'default'}
             data-backgroundstyle={backgroundStyle || 'default'}
        >
            <span className={STYLE.effect} style={style_effect}/>
            {children}
        </div>
    )
})