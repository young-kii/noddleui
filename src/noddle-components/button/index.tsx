import {baseButtonProps, buttonProps} from "./types";
import STYLE from './index.module.less'
import {forwardRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";

export default forwardRef((props: buttonProps,ref: any) => {

    const {children} = props

    return (
        <>
            <Button ref={ref} {...props}>{children}</Button>
        </>
    )
})

const Button = forwardRef((props: baseButtonProps, ref: any) => {

    const {children, onClick, type, border, disabled, backgroundStyle, widthFitsText, block, clickEffect} = props
    const [click, setClick] = useState(false)
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
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

    /**
     * @see handleClick
     * @description 处理点击事件
     * @see disabled
     * @description 当disabled时为禁用状态，无法完成点击事件
     */

    const handleClick = () => {
        if (disabled)
            return null
        onClick?.()
        setClick(false)
        setTimeout(() => {
            setClick(true)
        }, 10)
    }

    return (
        <div ref={ref} className={style_container} style={_style} onClick={handleClick}
             data-buttontype={type || 'default'}
             data-bordertype={border || 'default'}
             data-clickeffect={clickEffect || 'default'}
             data-backgroundstyle={backgroundStyle || 'default'}
        >
            {children}
        </div>
    )
})