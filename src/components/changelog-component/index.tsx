import {step} from "@/noddle-components/timeline/types";
import ContentContent from "@/components/content-content";
import ContentItem from "@/components/content-item";
import Timeline from "@/noddle-components/timeline";
import moment from "moment";
import {tabItemsProps} from "@/pages/components/button";

export default (props: tabItemsProps & {timeline: step[]}) => {
    const {onScroll, timeline} = props
    return (
        <>
            <ContentContent onScroll={onScroll} width={'100%'}>
                <ContentItem id={''} label={'changelog'} paddingTop={64}>
                    <Timeline timeline={timeline} sort={(timeline)=>{
                        return timeline.sort((a, b) => {
                            return Number(moment(b.content.extra.time).format('x')) - Number(moment(a.content.extra.time).format('x'))
                        })
                    }}/>
                </ContentItem>
            </ContentContent>
        </>
    )
}



