import {baseButtonProps, buttonProps} from "./types";
import STYLE from './index.module.less'
import {useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";

export default (props: buttonProps) => {

    const {children} = props

    return (
        <>
            <Button {...props}>{children}</Button>
        </>
    )
}

const Button = (props: baseButtonProps) => {
    const {children, onClick, type, border, disabled, backgroundStyle, noPadding, textWidth} = props
    const [click, setClick] = useState(false)
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_container = styles({
        container: true,
        click,
        disabled
    })
    const _style = {
        padding: noPadding ? 0 : 16,
        minWidth: textWidth ? 0 : 60
    }
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
        <div className={style_container} style={_style} onClick={handleClick} data-buttontype={type || 'default'}
             data-backgroundstyle={backgroundStyle || 'default'}
             data-bordertype={border || 'default'}>
            {children}
        </div>
    )
}