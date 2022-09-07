import STYLE from './index.module.less'
import _Segment from "@/noddle-components/segment/index.d";
import {MutableRefObject, useRef, useState} from "react";
export default (props:_Segment.segmentProps) => {
    const {className, tabs, selected} = props
    return (
        <>
            <div className={STYLE.container + ' ' + className}>
                <SegmentOption tabs={tabs} selected={selected}/>
            </div>
        </>
    )
}

const SegmentOption = (props) => {
    const selectSpan = useRef() as MutableRefObject<any>
    const {tabs, selected} = props
    const [_selected,_setSelected] = useState(selected)
    return (
        <>
            <span ref={selectSpan} className={STYLE.selected} style={{transform: `translateX(${64.34 * _selected}px)`}}></span>
            {
                tabs.map(item=>{
                    return <div key={item.id} className={STYLE.segmentOption} data-tab={item.tab} data-id={item.id} onClick={(e:any)=>_setSelected(e.target.dataset.id)}>
                        {item.label}
                    </div>
                })
            }

        </>
    )
}