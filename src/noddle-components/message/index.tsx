import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import STYLE from './index.module.less'
import {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import Space from "@/noddle-components/space";
import AlertCircle from "@/noddle-components/icons/alert-circle";
import { noddle_theme_colors, themes_message_array, themeTypes} from "@/types/common";
import {messageConfig, messageItemProps} from "@/noddle-components/message/types";
import InfoIcon from "@/noddle-components/icons/info-icon";
import DismissCircle from "@/noddle-components/icons/dismiss-circle";
import CheckMarkCircle from "@/noddle-components/icons/check-mark-circle";
import {getPropertyValue} from "@/utils";

namespace message {

    let modal: any = null
    const defaultTimeOut = 3000
    const message_container_id = 'noddle-message-container'
    export const Message = () => {
        useEffect(() => {
            console.log('Message container initialized.')
        }, [])
        return <div id={message_container_id} className={STYLE.container}/>
    }

    Message.Item = (props: messageItemProps) => {
        const {content, type, duration} = props
        const item = useRef() as MutableRefObject<HTMLDivElement>
        const [height, setHeight] = useState(item?.current?.offsetHeight)
        const [opacity, setOpacity] = useState(0)
        const [originHeight, setOriginHeight] = useState(item?.current?.offsetHeight)
        const [transform, setTransform] = useState('translateY(-12px) scale(0.7)')
        const [marginTop, setMarginTop] = useState(16)
        const [padding, setPadding] = useState('8px 24px')
        const timer = useRef(null) as any
        const getType = () => {
            if (type)
                return getPropertyValue(type, themes_message_array, 'primary')
            return 'primary'
        }
        const Icons = {
            primary: InfoIcon,
            warning: AlertCircle,
            danger: DismissCircle,
            success: CheckMarkCircle
        } as any
        const renderVisibleIcon = (Icon: any) => {
            return <Icon color={'transparent'}/>
        }

        const renderHiddenIcon = (Icon: any) => {
            return <Icon color={noddle_theme_colors[getType()]}/>
        }

        const style_item = {
            opacity,
            marginTop,
            height,
            transform,
            padding
        } as CSSProperties

        useEffect(() => {
            setOriginHeight(item?.current?.offsetHeight)
            setOpacity(1)
            setTransform(`translateY(0) scale(1)`)
            if (!timer.current)
                timer.current = setTimeout(() => {
                    setHeight(0)
                    setPadding('0 24px')
                    setTransform(`translateY(48px) scale(.8)`)
                    setOpacity(0)
                    setMarginTop(0)
                    timer.current = null
                }, duration)
            const initHeight = () => {
                setOriginHeight(item?.current?.offsetHeight)
            }
            window.addEventListener('resize', initHeight)
            return () => {
                window.removeEventListener('resize', initHeight)
            }
        }, [])


        return (
            <div className={STYLE.itemContainer} ref={item} style={style_item}>
                <Space gap={12} style={{flexWrap: 'nowrap'}}>
                    {renderVisibleIcon(Icons[getType()])}
                    {content}
                </Space>
                <div className={STYLE.inner} style={{height: originHeight}}>
                    <Space gap={12} style={{flexWrap: 'nowrap'}}>
                        {renderHiddenIcon(Icons[getType()])}
                        {content}
                    </Space>
                </div>
            </div>
        )
    }


    const showMessage = (content: string, duration: number, type?: themeTypes,) => {
        const body = document.body
        const root = createRoot(document.createElement('div'))
        const renderContainer = () => {
            modal = ReactDOM.createPortal(<Message/>, body)
            root.render(modal)
        }
        const renderItem = () => {
            const container = document.getElementById(message_container_id) as any
            const item = ReactDOM.createPortal(<Message.Item content={content} duration={duration} type={type}/>, container)
            const newRoot = createRoot(document.createElement('div'))
            newRoot.render(item)
            setTimeout(() => {
                newRoot.unmount()
            }, duration + 300)
        }
        if (!modal) {
            renderContainer()
            setTimeout(() => renderItem(), 0)
        } else renderItem()
    }

    const beforeShowMessage = (config: messageConfig | string, type: themeTypes) => {
        if (typeof config === "string")
            showMessage(config, 3000, type)
        else showMessage(config.content, config.duration || defaultTimeOut, type)
    }

    export const info = (config: messageConfig | string) => {
        beforeShowMessage(config, 'primary')
    }

    export const success = (config: messageConfig | string) => {
        beforeShowMessage(config, 'success')
    }

    export const error = (config: messageConfig | string) => {
        beforeShowMessage(config, 'danger')
    }

    export const warning = (config: messageConfig | string) => {
        beforeShowMessage(config, 'warning')
    }

}

export default message

