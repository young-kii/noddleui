import {createRoot} from "react-dom/client";
import ReactDOM from "react-dom";
import STYLE from './index.module.less'
import {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import AlertCircle from "@/noddle-components/icons/alert-circle";
import {noddle_theme_colors, themes_message_array, themeTypes} from "@/types/common";
import {notificationConfig, notificationItemProps} from "@/noddle-components/notification/types";
import InfoIcon from "@/noddle-components/icons/info-icon";
import DismissCircle from "@/noddle-components/icons/dismiss-circle";
import CheckMarkCircle from "@/noddle-components/icons/check-mark-circle";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import {getPropertyValue} from "@/utils";

namespace notification {

    let modal: any = null
    const message_container_id = 'noddle-notification-container'
    const defaultTimeOut = 5000
    export const Notification = () => {
        useEffect(() => {
            console.log('Message container initialized.')
        }, [])
        return <div id={message_container_id} className={STYLE.container}/>
    }

    Notification.Item = (props: notificationItemProps & { rootUnmount: () => void }) => {
        const {content, type, duration, title, rootUnmount} = props
        const item = useRef() as MutableRefObject<HTMLDivElement>
        const [height, setHeight] = useState(item?.current?.offsetHeight)
        const [opacity, setOpacity] = useState(1)
        const [originHeight, setOriginHeight] = useState(item?.current?.offsetHeight)
        const [transform, setTransform] = useState('translateX(100%)')
        const [marginTop, setMarginTop] = useState(16)
        const [padding, setPadding] = useState('8px 24px')
        const [boxShadow, setBoxShadow] = useState('0 0 5px rgba(0, 0, 0, .2)')
        const timer = useRef(null) as any
        const rootTimer = useRef(null) as any
        const mouseEnter = useRef(false)
        const icon_size = 24
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
            return <Icon height={icon_size} width={icon_size} color={'transparent'}/>
        }

        const renderHiddenIcon = (Icon: any) => {
            return <Icon height={icon_size} width={icon_size} color={noddle_theme_colors[getType()]}/>
        }

        const style_item = {
            opacity,
            marginTop,
            height,
            transform,
            padding
        } as CSSProperties

        const clearAllTimers = () => {
            if (timer.current)
                clearTimeout(timer.current)
            if (rootTimer.current)
                clearTimeout(rootTimer.current)
        }

        const resetTimer = () => {
            clearAllTimers()
            setTimer()
        }

        const setRootUnmountTimer = () => {
            rootTimer.current = setTimeout(() => {
                if (!mouseEnter.current)
                    rootUnmount()
            }, 600)
        }

        const fadeOut = () => {
            setHeight(0)
            setPadding('0 24px')
            setTransform(`translateX(-24px) translateY(12px)`)
            setOpacity(0)
            setMarginTop(0)
        }

        const setTimer = () => {
            timer.current = setTimeout(() => {
                if (!mouseEnter.current) {
                    fadeOut()
                    timer.current = null
                    setRootUnmountTimer()
                }
            }, duration)
        }

        const handleMouseEnter = () => {
            mouseEnter.current = true
            setBoxShadow('0 0 8px rgba(0, 0, 0, .3)')
            clearAllTimers()
        }

        const handleMouseLeave = () => {
            mouseEnter.current = false
            setBoxShadow('0 0 5px rgba(0, 0, 0, .2)')
            resetTimer()
        }

        const onClose = () => {
            clearAllTimers()
            fadeOut()
            setTimeout(() => {
                rootUnmount()
            }, 600)
        }

        useEffect(() => {
            setOriginHeight(item?.current?.offsetHeight)
            setOpacity(1)
            setTransform(`translateX(-24px)`)
            if (!timer.current)
                setTimer()
            const initHeight = () => {
                setOriginHeight(item?.current?.offsetHeight)
            }
            window.addEventListener('resize', initHeight)
            return () => {
                window.removeEventListener('resize', initHeight)
            }
        }, [])

        return (
            <div className={STYLE.itemContainer} ref={item} style={style_item} onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}>
                <div className={STYLE.top}>
                    {renderVisibleIcon(Icons[getType()])}
                    <div className={STYLE.title}>
                        {title}
                    </div>
                    <DismissIcon height={16} color={'rgba(0,0,0,.2)'} style={{position: "absolute", right: 0}}/>
                </div>
                <div className={STYLE.bottom}>
                    {content}
                </div>
                <div className={STYLE.inner} style={{height: originHeight, boxShadow}}>
                    <div className={STYLE.top}>
                        {renderHiddenIcon(Icons[getType()])}
                        <div className={STYLE.title}>
                            {title}
                        </div>
                        <DismissIcon height={16} color={'rgba(0,0,0,.2)'} style={{position: "absolute", right: 0}}
                                     onClick={onClose}/>
                    </div>
                    <div className={STYLE.bottom}>
                        {content}
                    </div>
                </div>
            </div>
        )
    }

    const showMessage = (content: string, duration: number, title: string, type?: themeTypes) => {
        const body = document.body
        const root = createRoot(document.createElement('div'))
        const renderContainer = () => {
            modal = ReactDOM.createPortal(<Notification/>, body)
            root.render(modal)
        }
        const renderItem = () => {
            const container = document.getElementById(message_container_id) as any
            const rootUnmount = () => newRoot.unmount()
            const item = ReactDOM.createPortal(<Notification.Item content={content} duration={duration}
                                                                  type={type} title={title}
                                                                  rootUnmount={rootUnmount}/>, container)
            const newRoot = createRoot(document.createElement('div'))
            newRoot.render(item)
        }
        if (!modal) {
            renderContainer()
            setTimeout(() => renderItem(), 0)
        } else renderItem()
    }

    const beforeShowMessage = (config: notificationConfig, type: themeTypes) => {
        showMessage(config.content, config.duration || defaultTimeOut, config.title, type)
    }

    export const info = (config: notificationConfig) => {
        beforeShowMessage(config, 'primary')
    }

    export const success = (config: notificationConfig) => {
        beforeShowMessage(config, 'success')
    }

    export const error = (config: notificationConfig) => {
        beforeShowMessage(config, 'danger')
    }

    export const warning = (config: notificationConfig) => {
        beforeShowMessage(config, 'warning')
    }

}

export default notification

