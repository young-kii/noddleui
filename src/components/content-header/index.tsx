import STYLE from './index.module.less'
import {useEffect, useState} from "react";
import Segment from "@/noddle-components/segment";
import _Segment from "@/noddle-components/segment/index.d";
import {contentHeaderProps} from "@/components/content-header/index.d";

export default (props: contentHeaderProps) => {
    const {img, title, description, tabsConfig} = props
    const [hideInfo, setHideInfo] = useState(false)
    const [docHeaderFixed, setDocHeaderFixed] = useState(false)
    useEffect(() => {

        const content = document.getElementById('noddle-content') as HTMLDivElement

        content.onscroll = (ev) => {
            if (content.scrollTop > 130) {
                setHideInfo(true)
                if (content.scrollTop > 162) {
                    setDocHeaderFixed(true)
                }
            } else {
                setHideInfo(false)
                setDocHeaderFixed(false)
            }
        }
    }, [])

    return (
        <>
            <div className={STYLE.container}>
                <div className={STYLE.top}>
                    <div className={STYLE.info + ' ' + (hideInfo ? STYLE.hide : '')}>
                        <h1 className={STYLE.title}>{title}</h1>
                        <div className={STYLE.description}>{description}</div>
                    </div>
                </div>
            </div>

            <div className={STYLE.doc_header} style={{ paddingTop: tabsConfig ? 16 : 28 }}>
                <div className={STYLE.imageContainer + ' ' + (hideInfo ? STYLE.hide_display : '')}>
                    <img className={STYLE.image}
                         src={img}
                         alt=''/>
                </div>
                <h1 className={STYLE.info_title + ' ' + (docHeaderFixed ? 'STYLE.hide' : STYLE.hide)}>{title}</h1>
                {
                    tabsConfig ?
                        <Segment className={STYLE.segment} tabs={tabsConfig.tabs} selected={tabsConfig.selected} onChange={tabsConfig.onChange}/>
                        : ''
                }
            </div>
        </>
    )
}
