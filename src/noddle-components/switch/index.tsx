import STYLE from './index.module.less'
import {
    defaultExtraContent,
    defaultProps, moreStatusExtraContent,
    moreStatusProps,
    switchProps
} from "@/noddle-components/switch/types";
import {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {themeTypes} from "@/types";

export default (props: switchProps) => {
    const {theme, biggerButton, onChange, extraContent, type} = props
    const getTheme = (): themeTypes => {
        if (theme) {
            return ["danger", "default", "primary", "warning", "success"].indexOf(theme) > -1 ? theme : "default"
        }
        return "default"
    }
    const getType = () => {
        let _type = 'default', _extraContent
        if (type) {
            _type = ['default', 'moreStatus'].indexOf(type) > -1 ? type : 'default'
        }
        _extraContent =  extraContent || extraContentMap[_type]
        return [_type, _extraContent]
    }
    const extraContentMap = {
        default: {
            on: '',
            off: ''
        }as defaultExtraContent,
        moreStatus: [
            { content: '初始状态', theme: 'primary'},
            { content: '告警状态', theme: 'warning'},
            { content: '危险状态' , theme: 'danger'},
            { content: '关注', theme: 'success'},
        ] as moreStatusExtraContent[]
    } as any
    const [newType, newExtraContent] = getType()
    const map = {
        default: <Default {...{theme: getTheme(), biggerButton, onChange, extraContent: newExtraContent}}/>,
        moreStatus: <MoreStatus {...{ onChange, extraContent: newExtraContent}}/>
    } as any
    return (
        <>
            {
                map[newType]
            }
        </>
    )
}

const Default = (props: defaultProps) => {
    const {theme, biggerButton, onChange, extraContent} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [status, setStatus] = useState(false)
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const extraRef = useRef() as MutableRefObject<HTMLDivElement>
    const ballRef = useRef() as MutableRefObject<HTMLDivElement>
    const extra = status ? extraContent?.on : extraContent?.off
    const [containerWidth, setContainerWidth] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const [extraWidth, setExtraWidth] = useState(0)
    const [ballWidth, setBallWidth] = useState(0)
    const class_container = styles({
        container: true,
        on: status
    })
    const class_ball = styles({
        ball: true
    })
    const class_extra = styles({
        extra: true
    })
    const style_container = {} as CSSProperties
    const style_ball = {
        transform: status ?
            `translateX(${containerWidth - containerHeight}px) ${biggerButton ? 'scale(1.4)' : ''}`
            : `translateX(0) ${biggerButton ? 'scale(1.4)' : ''}`
    } as CSSProperties
    const style_extra = {
        minWidth: extraWidth,
        transform: status ? `translateX(-${ballWidth}px)` : 'none'
    } as CSSProperties
    const handleClick = () => {
        setStatus(!status)
        onChange?.(!status)
    }
    useEffect(() => {
        setContainerWidth(containerRef.current.offsetWidth)
        setContainerHeight(containerRef.current.offsetHeight)
        setExtraWidth(extraRef.current.offsetWidth)
        setBallWidth(ballRef.current.offsetWidth)
    }, [status])
    useEffect(() => {
        const hiddenSpan = extraRef.current.getElementsByClassName('hiddenSpan') as unknown as HTMLSpanElement[]
        let maxWidth = 0
        for (let item of hiddenSpan) {
            if (item.offsetWidth > maxWidth)
                maxWidth = item.offsetWidth
        }
        setExtraWidth(maxWidth)
    }, [])
    return (
        <div className={STYLE.default}>
            <div ref={containerRef} className={class_container} style={style_container}
                 onClick={handleClick}
                 data-theme={theme}>
                <div ref={ballRef} className={class_ball} style={style_ball}/>
                <div ref={extraRef} className={class_extra} style={style_extra}>
                    {extra}
                    <span className={'hiddenSpan'}
                          style={{visibility: "hidden", position: "absolute"}}>{extraContent?.on}</span>
                    <span className={'hiddenSpan'}
                          style={{visibility: "hidden", position: "absolute"}}>{extraContent?.off}</span>
                </div>
            </div>
        </div>
    )
}

const MoreStatus = (props: moreStatusProps) => {
    const {onChange, extraContent} = props
    const [currentStatus, setCurrentStatus] = useState(0)
    const extraContentLength = extraContent.length
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_container = {

    }
    const class_container = styles({
        container: true,
        on: true
    })
    const handleClick = () => {
        let _status
        if (currentStatus + 1 === extraContentLength)
            _status = 0
        else _status = currentStatus + 1
        setCurrentStatus(_status)
        onChange?.({status: _status, content: extraContent[_status].content})
    }
    return (
        <div className={STYLE.moreStatus} onClick={handleClick}>
            <div className={class_container} style={style_container} data-theme={extraContent[currentStatus].theme || 'default'}>
                {extraContent[currentStatus].content}
            </div>
        </div>
    )
}