import STYLE from './index.module.less'
import {tabsProps} from "@/noddle-components/tabs/types";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import React, {CSSProperties, MutableRefObject, useEffect, useRef, useState} from "react";
import AddIcon from "@/noddle-components/icons/add-icon";
import { getPropertyValue, getRandomString} from "@/utils";
import {cardTypes} from "@/types/common";
import Switch from "@/noddle-components/switch";
import Card from "@/pages/components/card";


const defaultKey = 'default_KEY_@&^'


export default (props: tabsProps) => {
    const {type} = props
    const getType = () => {
        if (type)
            return getPropertyValue(type, cardTypes, 'default')
        return 'default'
    }
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const class_container = styles({
        [`${getType()}`]: true
    })
    const types = {
        default: <DefaultType {...props}/>,
        card: <CardType {...props}/>
    } as any

    return (
        <div className={class_container}>
            {
                types[getType()]
            }
        </div>
    )
}

const CardType = (props: tabsProps) => {
    const {items, currentTab, outlined} = props
    const [items_, setItems] = useState(items || [])
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const tabsID = useRef('')
    const [activeKey, setActiveKey] = useState(defaultKey) as any
    const newTabIndex = useRef(0)
    const headerRef = useRef() as MutableRefObject<HTMLDivElement>
    const class_header = styles({
        header: true
    })
    const class_tab = styles({
        tab: true
    })
    const class_add = styles({
        tab: true,
        add: true
    })
    const class_content = styles({
        content: true,
        outlined
    })

    const handleClick = (e: any, key: React.Key) => {
        switchTab(key)
        setTimeout(() => headerRef.current.scrollTo({
            left: e.target.offsetLeft,
            behavior: "smooth"
        }), 0)
    }

    const switchTab = (key: React.Key) => {
        setActiveKey(key)
    }
    const addTab = () => {
        const newItems = [...items_]
        const newTabKey = `newTab${newTabIndex.current++}`
        newItems.push({
            label: `Tab ${newTabIndex.current + 3}`,
            children: <Card/>,
            key: newTabKey
        })
        setItems(newItems)
        setActiveKey(newTabKey)
        setTimeout(() => headerRef.current.scrollTo({
            left: headerRef.current.scrollWidth - headerRef.current.offsetWidth,
            behavior: "smooth"
        }), 0)
    }
    const renderHeader = () => {
        return (
            <div className={class_header} ref={headerRef}>
                {
                    items_?.map((item) => {
                        return <div key={item.key}
                                    className={class_tab}
                                    data-tabsid={tabsID.current}
                                    onClick={(e) => handleClick(e, item.key)}
                                    data-active={activeKey === item.key}>
                            {item.label}
                        </div>
                    })
                }
                <div className={class_add} onClick={addTab}>
                    <AddIcon height={14} width={14}/>
                </div>
            </div>
        )
    }
    useEffect(() => {
        tabsID.current = getRandomString()
        setActiveKey(currentTab || items_[0]?.key)
    }, [])
    const renderContent = () => {
        return (
            <div className={class_content}>
                {
                    items_?.map(item => {
                        return <div key={item.key}
                                    style={{display: item.key === activeKey ? 'block' : 'none'}}>{item.children}</div>
                    })
                }
            </div>
        )
    }

    return (
        <>
            {renderHeader()}
            {renderContent()}
        </>
    )
}

const DefaultType = (props: tabsProps) => {
    const {items, currentTab, outlined} = props
    const [items_, setItems] = useState(items || [])
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [activeKey, setActiveKey] = useState(defaultKey) as any
    const newTabIndex = useRef(0)
    const tabsID = useRef('')
    const [sliderX, setSliderX] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    const headerRef = useRef() as MutableRefObject<HTMLDivElement>
    const style_slider = {
        transform: `translateX(${sliderX}px)`,
        width: sliderWidth
    } as CSSProperties
    const class_header = styles({
        header: true
    })
    const class_tab = styles({
        tab: true
    })
    const class_add = styles({
        tab: true,
        add: true
    })
    const class_content = styles({
        content: true,
        outlined
    })

    const handleClick = (e: any, key: React.Key) => {
        switchTab(key)
        setTimeout(() => headerRef.current.scrollTo({
            left: e.target.offsetLeft,
            behavior: "smooth"
        }), 0)
        // setSliderWidth(e.target.offsetWidth)
        // setSliderX(e.target.offsetLeft)
    }

    const switchTab = (key: React.Key) => {
        setActiveKey(key)
    }
    const addTab = () => {
        const newItems = [...items_]
        const newTabKey = `newTab${newTabIndex.current++}`
        newItems.push({
            label: `Tab ${newTabIndex.current }`,
            children: <Switch/>,
            key: newTabKey
        })
        setItems(newItems)
        setActiveKey(newTabKey)
        setTimeout(() => headerRef.current.scrollTo({
            left: headerRef.current.scrollWidth - headerRef.current.offsetWidth,
            behavior: "smooth"
        }), 0)
    }

    useEffect(() => {
        tabsID.current = getRandomString()
        setActiveKey(currentTab || items_[0]?.key)
    }, [])
    useEffect(() => {
        const tabs = document.querySelectorAll(`[data-tabsid=${tabsID.current}]`) as any
        if (tabs && tabs.length !== 0) {
            for (let item of tabs) {
                if (item.dataset.active === 'true') {
                    setSliderWidth(item.offsetWidth)
                    setSliderX(item.offsetLeft)
                }
            }
        }
    }, [activeKey])

    const renderHeader = () => {
        return (
            <div className={class_header} ref={headerRef}>
                {
                    items_?.map((item) => {
                        return <div key={item.key}
                                    className={class_tab}
                                    data-tabsid={tabsID.current}
                                    onClick={(e) => handleClick(e, item.key)}
                                    data-active={activeKey === item.key}>
                            {item.label}
                        </div>
                    })
                }
                <div className={class_add} onClick={addTab}>
                    <AddIcon height={14} width={14}/>
                </div>
                <div className={STYLE.slider} style={style_slider}/>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className={class_content}>
                {
                    items_?.map(item => {
                        return <div key={item.key}
                                    style={{display: item.key === activeKey ? 'block' : 'none'}}>{item.children}</div>
                    })
                }
            </div>
        )
    }
    return (
        <>
            {renderHeader()}
            {renderContent()}
        </>
    )
}