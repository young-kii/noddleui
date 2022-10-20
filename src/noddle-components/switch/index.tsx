import STYLE from './index.module.less'
import {
    defaultExtraContent,
    defaultProps, moreStatusExtraContent,
    moreStatusProps,
    switchProps
} from "@/noddle-components/switch/types";
import {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {themeTypes} from "@/types/common";

export default (props: switchProps) => {
    const {theme, biggerButton, onChange, extraContent, type, defaultStatus, status} = props
    /**
     * @see getTheme
     * @description 获取switch的主题,默认返回`default`
     */
    const getTheme = (): themeTypes => {
        if (theme) {
            return ["danger", "default", "primary", "warning", "success"].indexOf(theme) > -1 ? theme : "default"
        }
        return "default"
    }

    /**
     * @see getType
     * @description 获取switch的类型,以及显示的额外内容
     */

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
        default: <Default {...{theme: getTheme(), biggerButton, onChange, extraContent: newExtraContent, defaultStatus,status}}/>,
        moreStatus: <MoreStatus {...{ onChange, extraContent: newExtraContent,status:Number(status)}}/>
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
    const {theme, biggerButton, onChange, extraContent, defaultStatus, status} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [_status, setStatus] = useState(status || (defaultStatus === 'on'))
    const containerRef = useRef() as MutableRefObject<HTMLDivElement>
    const extraRef = useRef() as MutableRefObject<HTMLDivElement>
    const ballRef = useRef() as MutableRefObject<HTMLDivElement>
    const extra = _status ? extraContent?.on : extraContent?.off
    const [containerWidth, setContainerWidth] = useState(0)
    const [containerHeight, setContainerHeight] = useState(0)
    const [extraWidth, setExtraWidth] = useState(0)
    const [ballWidth, setBallWidth] = useState(0)
    const class_container = styles({
        container: true,
        on: _status
    })
    const class_ball = styles({
        ball: true
    })
    const class_extra = styles({
        extra: true
    })
    const style_container = {} as CSSProperties
    const style_ball = {
        transform: _status ?
            `translateX(${containerWidth - containerHeight}px) ${biggerButton ? 'scale(1.4)' : ''}`
            : `translateX(0) ${biggerButton ? 'scale(1.4)' : ''}`
    } as CSSProperties
    const style_extra = {
        minWidth: extraWidth,
        transform: _status ? `translateX(-${ballWidth}px)` : 'none'
    } as CSSProperties
    const handleClick = () => {
        setStatus(!_status)
        onChange?.(!_status)
    }
    useEffect(() => {
        setContainerWidth(containerRef.current.offsetWidth)
        setContainerHeight(containerRef.current.offsetHeight)
        /**
         * @see setExtraWidth
         * autoWidth 控制是否宽度自适应
         */
        setExtraWidth(extraRef.current.offsetWidth)
    }, [_status])
    const initExtraWidth = () => {
        const hiddenSpan = extraRef.current.getElementsByClassName('hiddenSpan') as unknown as HTMLSpanElement[]
        let maxWidth = 0
        for (let item of hiddenSpan) {
            if (item.offsetWidth > maxWidth)
                maxWidth = item.offsetWidth
        }
        setExtraWidth(maxWidth)
    }
    useEffect(() => {
        initExtraWidth()
        setBallWidth(ballRef.current.offsetWidth)
    }, [_status])
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

const MoreStatus = (props: Omit<moreStatusProps,'status'> & {status: number}) => {
    const {onChange, extraContent, status} = props
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
        onChange?.({status: _status, content: extraContent[_status].content, theme: extraContent[_status].theme})
    }
    useEffect(() => {
        extraContent?.find((item,index) => {
            if(item.default)
                setCurrentStatus( status || index)
        })
    },[])
    return (
        <div className={STYLE.moreStatus} onClick={handleClick}>
            <div className={class_container} style={style_container} data-theme={extraContent[currentStatus].theme || 'default'}>
                {extraContent[currentStatus].content}
            </div>
        </div>
    )
}