import {step} from "@/noddle-components/steps/types";
import ContentContent from "@/components/content-content";
import ContentItem from "@/components/content-item";
import Steps from "@/noddle-components/steps";
import moment from "moment";
import {tabItemsProps} from "@/pages/components/button";

export default (props: tabItemsProps & {steps: step[]}) => {
    const {onScroll, steps} = props
    return (
        <>
            <ContentContent onScroll={onScroll} width={'100%'}>
                <ContentItem id={''} label={'changelog'} paddingTop={64}>
                    <Steps steps={steps} sort={(steps)=>{
                        return steps.sort((a, b) => {
                            return Number(moment(b.content.extra.time).format('x')) - Number(moment(a.content.extra.time).format('x'))
                        })
                    }}/>
                </ContentItem>
            </ContentContent>
        </>
    )
}



