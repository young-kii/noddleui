import STYLE from './index.module.less'
import _Segment from "@/noddle-components/segment/index.d";
import {MutableRefObject, useEffect, useRef, useState} from "react";
import {__function} from "@/noddle-components/globalConfig/index.d";
import {useNavigate} from "react-router-dom";

export default (props: _Segment.segmentProps) => {
    let newSelected: number | string | undefined = 0
    const {className, tabs, selected, onChange} = props
    const [optionWidth, setOptionWidth] = useState([]) as [[], __function]
    const segmentOption = useRef() as MutableRefObject<any>
    const [options, setOptions] = useState([]) as [[], __function]
    const newTabs = tabs.map((tab: _Segment.tab, index: number) => {
        if (tab.tab === selected) newSelected = index
        return {...tab, id: index}
    })
    useEffect(() => {
        const _options = segmentOption.current.getElementsByClassName(STYLE.segmentOption) as HTMLDivElement[]
        const optionWidthArray = []
        for (let option of _options) {
            optionWidthArray.push(option.offsetWidth)
        }
        setOptionWidth(optionWidthArray)
        setOptions(_options)
    }, [])
    return (
        <>
            <div ref={segmentOption} className={STYLE.container + ' ' + className}>
                <SegmentOption tabs={newTabs} selected={newSelected} optionWidth={optionWidth} onChange={onChange}
                               options={options}/>
            </div>
        </>
    )
}

const SegmentOption = (props: _Segment.segmentOptionProps) => {
    const nav = useNavigate()
    const selectSpan = useRef() as MutableRefObject<any>
    const highlight = useRef() as MutableRefObject<any>
    const {tabs, selected, optionWidth, onChange, options} = props
    const [selectedId, setSelectedId] = useState(selected) as [number, __function]
    const [selectedTab, setSelectedTab] = useState('') as [string, __function]
    const [selectedWidth, setSelectedWidth] = useState(0)
    const [selectedOption, setSelectedOption] = useState() as [HTMLDivElement, __function]
    const [translateX, setTranslateX] = useState(2)
    const handleClick = (e: any) => {
        setSelectedId(e.target.dataset.id)
        setSelectedTab(e.target.dataset.tab)
        setSelectedOption(e.target)
        if (selectedOption) {
            selectedOption.classList.remove(STYLE.selected_change_font)
        }
        e.target.classList.add(STYLE.selected_change_font)
    }
    useEffect(() => {
        setSelectedTab(tabs[Number(selected)].tab)
    }, [])
    useEffect(() => {
        setSelectedWidth(optionWidth[selectedId])
        let tranX = 2
        for (let index = 0; index < selectedId; index++) {
            tranX += optionWidth[index] + 4
        }
        setTranslateX(tranX)
        if (selectedTab)
        {
            onChange?.({tab: selectedTab})
            nav('?tab='+selectedTab)
        }
        if(options.length !== 0)
        {
            setSelectedOption(options[selectedId])
            options[selectedId].classList.add(STYLE.selected_change_font)
            highlight.current.classList.remove(STYLE.highlight)
            setTimeout(()=>{
                highlight.current.classList.add(STYLE.highlight)
            },10)
        }
    }, [optionWidth, selectedId])
    return (
        <>
            <span ref={selectSpan} className={STYLE.selected}
                  style={{width: selectedWidth, transform: `translateX(${translateX}px)`}}>
                <div ref={highlight} className={STYLE.highlight}/>
            </span>
            {
                tabs.map((item: _Segment.tab) => {
                    return <div key={item.id} className={STYLE.segmentOption} data-id={item.id} data-tab={item.tab}
                                data-label={item.label}
                                onClick={handleClick}>
                        {item.label}
                    </div>
                })
            }
        </>
    )

}