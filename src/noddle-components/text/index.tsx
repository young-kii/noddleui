import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import _Text from "@/noddle-components/text/types";
import {CSSProperties, forwardRef, useEffect, useRef, useState} from "react";
import Space from "@/noddle-components/space";
import DocumentCopy from "@/noddle-components/icons/document-copy";
import CheckMark from "@/noddle-components/icons/check-mark";
import {copy} from "@/utils";
import message from "@/noddle-components/message";

export default forwardRef((props: _Text.textProps, ref: any) => {

    const {
        children,
        type,
        pure,
        bolder,
        decoration,
        lineType,
        isButton,
        onClick,
        fontSize,
        color,
        noWrap,
        onCopy
    } = props
    const [copied, setCopied] = useState(false) as any
    const timer = useRef() as any
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_container = {
        fontSize,
        color
    } as CSSProperties
    const class_container = styles({
        container: true,
        [`${type || 'default'}`]: true,
        pure,
        bolder: typeof bolder === 'boolean' ? bolder : false,
        noWrap: typeof noWrap === "boolean" ? noWrap : false,
        [`${decoration || 'none'}`]: true,
        [`${lineType || 'solid'}`]: true,
        isButton
    })
    const handleCopy = () => {
        setCopied(true)
        if (!timer.current)
        {
            if (onCopy) {
                if (typeof onCopy === "function") {
                    onCopy?.(copy(children))
                }
                copy(children)
            }
            message.success('复制成功')
            timer.current = setTimeout(() => {
                setCopied(false)
                timer.current = null
            }, 2000)
        }
    }

    return (
        children ?
            <>
            <span ref={ref} className={class_container} style={style_container} onClick={isButton ? onClick : () => {
            }}>
                    {children}
        </span>
                <span style={{padding: 0, height: 18}} onClick={handleCopy}>
                    {
                        onCopy ? (
                            copied ?
                                <CheckMark style={{marginLeft: 4}} height={18} width={18} theme={"success"}/>
                                :
                                <DocumentCopy style={{marginLeft: 4}} height={18} width={18}/>
                        ) : ''
                    }
                </span>
            </>
            :
            <></>
    )
})
