import {step, timelineProps} from "@/noddle-components/timeline/types";
import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import CircleIcon from "@/noddle-components/icons/circle-icon";
import {noddle_main_color} from "@/types/common";
import Divider from "@/noddle-components/divider";
import {CSSProperties, forwardRef} from "react";

const Timeline = forwardRef((props: timelineProps, ref: any) => {
    const {direction, timeline, type, sort} = props
    const renderTimeline = () => {
        return map[direction || 'horizontal']
    }
    let newTimeline = timeline
    if (sort && typeof sort === "function") {
        newTimeline = sort(timeline)
    }
    let newProps = {
        type,
        timeline: newTimeline
    }
    const map = {
        horizontal: <Horizontal {...newProps} ref={ref}/>,
        vertical: <Vertical {...newProps}/>
    }
    return (
        <>
            {renderTimeline()}
        </>
    )
})

const Horizontal = forwardRef((props: Omit<timelineProps, 'direction'>, ref: any) => {
    const {type, timeline} = props
    const timeline_count = timeline?.length
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container_horizontal: true
    })
    const renderTimeline = () => {
        return <>
            {
                timeline?.map((item, index) => {
                    return <Step index={index} key={index} sum={timeline_count} {...item} Icon={CircleIcon}/>
                })
            }
        </>
    }
    return (
        <div ref={ref} className={class_container}>
            {
                renderTimeline()
            }
        </div>
    )
})

const Vertical = (props: Omit<timelineProps, 'direction'>) => {
    return <></>
}

const Step = (props: step & { index: number, sum: number, Icon: any }) => {
    const {title, content, index, sum, Icon} = props
    const iconWidth = 10
    const getExtraPosition = () => {
        if (content?.extra?.position)
            return ['behind-title', 'footer'].indexOf(content?.extra?.position) > -1 ? content?.extra?.position : 'behind-title'
        return 'behind-title'
    }
    const extra_position = getExtraPosition()

    return (
        <>
            <div className={STYLE.title}>
                <Icon height={iconWidth} width={iconWidth} color={noddle_main_color}/>
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
            <div className={STYLE.content}>
                {
                    index === sum - 1 ?
                        <div style={{minWidth: iconWidth}}/>
                        : <Divider direction={"vertical"} width={iconWidth}/>
                }
                <div className={STYLE.content}>
                    <div className={STYLE.main}>{content?.main}</div>
                    {
                        extra_position === 'footer' ?
                            <div className={STYLE.footer}>
                                {content?.extra?.content}
                            </div>
                            : <></>
                    }
                </div>
            </div>
        </>
    )
}

export default Timeline