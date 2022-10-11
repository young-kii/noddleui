import React, {useState} from "react";
import ContentHeader, {tabsConfig} from "@/components/content-header";
import {useTranslation} from "@/noddle-components/globalConfig/Config";
interface props {
    Api: any
    Demo: any
    Changelog: any
    title: string
    description: string
}
export default (props: props) => {
    const translate = useTranslation()
    const [tab, setTab] = useState('demo')
    const {description, Demo, Api, title, Changelog} = props
    const [scrollHistory, setScrollHistory] = useState({
        demo: 0,
        api: 0,
        changelog: 0
    }) as any
    const noddle_content = document.getElementById('noddle-content') as HTMLDivElement
    const tabsConfig = {
        tabs: [
            {tab: 'demo', label: translate('common.demo')},
            {tab: 'api', label: translate('common.api')},
            {tab: 'changelog', label: translate('common.changelog_uppercase')},
        ],
        onChange: (value) => {
            setTab(value.tab)
            setTimeout(() => {
                noddle_content?.scrollTo({
                    top: scrollHistory[value.tab],
                    behavior: "smooth"
                })
            }, 10)
        }
    } as tabsConfig
    const handleScroll = (scrollTop: number) => {
        setScrollHistory({...scrollHistory, [tab]: scrollTop})
    }
    const map = {
        demo: <Demo onScroll={handleScroll}/>,
        api: <Api onScroll={handleScroll}/>,
        changelog: <Changelog onScroll={handleScroll}/>
    } as any
    return (
        <div>
            <ContentHeader
                tabsConfig={tabsConfig}
                title={title}
                description={description}
            />
            {
                map[tab]
            }
        </div>
    )
}