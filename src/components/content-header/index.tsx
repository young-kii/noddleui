import STYLE from './index.module.less'
import {useEffect, useState} from "react";
import Segment from "@/noddle-components/segment";
import _Segment from "@/noddle-components/segment/types";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {__function} from "@/noddle-components/globalConfig/types";

interface contentHeaderProps {
    title: string,
    description: string,
    tabsConfig?: {
        tabs: _Segment.tab[],
        selected?: string,
        onChange?: __function
    }
}

export default (props: contentHeaderProps) => {
    const {title, description, tabsConfig} = props
    const [hideInfo, setHideInfo] = useState(false)
    const [docHeaderFixed, setDocHeaderFixed] = useState(false)
    const [bgWhite, setBGWhite] = useState(false)
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_info = styles({
        info: true,
        hide: hideInfo
    })
    const style_info_title = styles({
        info_title: true,
        hide: !docHeaderFixed
    })
    const docHeader = styles({
        doc_header: true,
        background_white: bgWhite
    })
    useEffect(() => {
        const content = document.getElementById('noddle-content') as HTMLDivElement
        content.scrollTo({
            top: 0,
        })
        content.onscroll = (ev) => {
            if (content.scrollTop > 68) {
                setHideInfo(true)
                setBGWhite(true)
                setDocHeaderFixed(true)
            } else {
                setHideInfo(false)
                setBGWhite(false)
                setDocHeaderFixed(false)
            }
        }
    }, [])

    return (
        <>
            <div className={STYLE.container}>
                <div className={STYLE.top}>
                    <div className={style_info}>
                        <h1 className={STYLE.title}>{title}</h1>
                        <div className={STYLE.description}>{description}</div>
                    </div>
                </div>
            </div>

            <div className={docHeader} style={{paddingTop: tabsConfig ? 16 : 28}}>
                <h1 className={style_info_title}>{title}</h1>
                {
                    tabsConfig ?
                        <Segment className={STYLE.segment} tabs={tabsConfig.tabs} onChange={tabsConfig.onChange}/>
                        : ''
                }
            </div>
        </>
    )
}
