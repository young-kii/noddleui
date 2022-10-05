import {step, stepsProps} from "@/noddle-components/steps/types";
import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import CircleIcon from "@/noddle-components/icons/circle-icon";
import {noddle_main_color} from "@/types";
import Divider from "@/noddle-components/divider";
import {useEffect, useRef, useState} from "react";
import Text from "@/noddle-components/text";

export default (props: stepsProps) => {
    const {direction} = props
    const renderSteps = () => {
        return map[direction || 'horizontal']
    }
    delete props.direction
    const map = {
        horizontal: <Horizontal {...props}/>,
        vertical: <Vertical {...props}/>
    }
    return (
        <>
            {renderSteps()}
        </>
    )
}

const Horizontal = (props: Omit<stepsProps, 'direction'>) => {
    const {type, steps} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container_horizontal: true
    })
    const renderSteps = () => {
        return <>
            {
                steps?.map((item, index) => {
                    return <Step key={index} {...item}/>
                })
            }
        </>
    }
    return (
        <div className={class_container}>
            {
                renderSteps()
            }
        </div>
    )
}

const Vertical = (props: Omit<stepsProps, 'direction'>) => {
    return <></>
}

const Step = (props: step) => {
    const {title, content} = props
    const iconWidth = 10
    const innerContentRef = useRef() as { current: HTMLDivElement }
    const [innerContentOffsetHeight, setInnerContentOffsetHeight] = useState(0)
    const getExtraPosition = () => {
        if (content?.extra?.position)
            return ['behind-title', 'footer'].indexOf(content?.extra?.position) > -1 ? content?.extra?.position : 'behind-title'
        return 'behind-title'
    }
    const extra_position = getExtraPosition()
    useEffect(() => {
        setInnerContentOffsetHeight(innerContentRef.current.offsetHeight)
    }, [])
    return (
        <>
            <div className={STYLE.title}>
                <CircleIcon height={iconWidth} width={iconWidth} color={noddle_main_color}/>
                <div className={STYLE.title}>
                    {title}
                    {
                        extra_position === 'behind-title' ?
                            <div className={STYLE.extra}>
                                {content?.extra?.content}
                            </div>
                            : <></>
                    }
                </div>
            </div>
            <div className={STYLE.content} style={{height: innerContentOffsetHeight}}>
                <Divider direction={"vertical"} width={iconWidth}/>
                <div className={STYLE.content} ref={innerContentRef}>
                    <div className={STYLE.main}>{content?.main}</div>
                    <div className={STYLE.footer}>
                        {
                            extra_position === 'footer' ?
                                content?.extra?.content
                                : <></>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}