import {step, stepsProps} from "@/noddle-components/steps/types";
import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import CircleIcon from "@/noddle-components/icons/circle-icon";
import {noddle_main_color} from "@/types";
import Divider from "@/noddle-components/divider";
import {forwardRef} from "react";

const Steps = forwardRef((props: stepsProps,ref: any) => {
    const {direction, steps, type, sort} = props
    const renderSteps = () => {
        return map[direction || 'horizontal']
    }
    let newSteps = steps
    if(sort && typeof sort === "function"){
        newSteps = sort(steps)
    }
    let newProps = {
        type,
        steps: newSteps
    }
    const map = {
        horizontal: <Horizontal {...newProps} ref={ref}/>,
        vertical: <Vertical {...newProps}/>
    }
    return (
        <>
            {renderSteps()}
        </>
    )
})

const Horizontal = forwardRef((props: Omit<stepsProps, 'direction'>,ref: any) => {
    const {type, steps} = props
    const steps_count = steps?.length
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        container_horizontal: true
    })
    const renderSteps = () => {
        return <>
            {
                steps?.map((item, index) => {
                    return <Step index={index} key={index} sum={steps_count} {...item} Icon={CircleIcon}/>
                })
            }
        </>
    }
    return (
        <div ref={ref} className={class_container}>
            {
                renderSteps()
            }
        </div>
    )
})

const Vertical = (props: Omit<stepsProps, 'direction'>) => {
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
                        <div style={{ width: iconWidth }}/>
                        : <Divider direction={"vertical"} width={iconWidth}/>
                }
                <div className={STYLE.content}>
                    <div className={STYLE.main} >{content?.main}</div>
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

export default Steps