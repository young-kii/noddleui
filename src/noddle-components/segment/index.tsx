import STYLE from './index.module.less'
import _Segment from "@/noddle-components/segment/index.d";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {__function} from "@/noddle-components/globalConfig/index.d";
import Loading from "@/noddle-components/loading";

export default (props: _Segment.segmentProps) => {
    const {className, tabs, selected, onChange} = props
    const [optionWidth, setOptionWidth] = useState([]) as [[], __function]
    const segmentOption = useRef() as MutableRefObject<any>
    let newSelected: number | string | undefined = 0
    const newTabs = tabs.map((tab: _Segment.tab, index: number) => {
        if(tab.tab === selected) newSelected = index
        return {...tab, id: index}
    })
    useEffect(() => {
        const options = segmentOption.current.getElementsByClassName(STYLE.segmentOption) as HTMLDivElement[]
        const optionWidthArray = []
        for (let option of options) {
            optionWidthArray.push(option.offsetWidth)
        }
        setOptionWidth(optionWidthArray)
    }, [])
    return (
        <>
            <div ref={segmentOption} className={'aaa' + ' ' + STYLE.container + ' ' + className}>
                <SegmentOption tabs={newTabs} selected={newSelected} optionWidth={optionWidth} onChange={onChange}/>
            </div>
        </>
    )
}

const SegmentOption = (props: _Segment.segmentOptionProps) => {
    const selectSpan = useRef() as MutableRefObject<any>
    const {tabs, selected, optionWidth, onChange} = props
    const [selectedId, setSelectedId] = useState(selected) as [number,__function]
    const [selectedTab,setSelectedTab] = useState('') as [string,__function]
    const [selectedWidth, setSelectedWidth] = useState(0)
    const [translateX, setTranslateX] = useState(2)
    const handleClick = (e: any) => {
        setSelectedId(e.target.dataset.id)
        setSelectedTab(e.target.dataset.tab)
    }
    useEffect(() => {
        setSelectedWidth(optionWidth[selectedId])
        let tranX = 2
        for (let index = 0; index < selectedId; index++) {
            tranX += optionWidth[index] + 4
        }
        setTranslateX(tranX)
        onChange?.(selectedTab)
    }, [optionWidth, selectedId])
    if (optionWidth) return (
        <>
            <span ref={selectSpan} className={STYLE.selected}
                  style={{width: selectedWidth, transform: `translateX(${translateX}px)`}}></span>
            {
                tabs.map((item: _Segment.tab) => {
                    return <div key={item.id} className={STYLE.segmentOption} data-tab={item.tab} data-id={item.id}
                                onClick={handleClick}>
                        {item.label}
                    </div>
                })
            }

        </>
    )
    else return <Loading/>
}