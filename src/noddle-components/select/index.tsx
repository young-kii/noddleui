import STYLE from './index.module.less'
import _Select from "@/noddle-components/select/index.d";
import Input from "@/noddle-components/input";
import {LegacyRef, MouseEventHandler, MutableRefObject, RefObject, useEffect, useRef, useState} from "react";
import ArrowDown from "@/noddle-components/icons/arrow-down";
import {Simulate} from "react-dom/test-utils";
import mouseUp = Simulate.mouseUp;

export default (props:_Select.selectProps) => {
    return (
        <>
            <Select {...props} />
        </>
    )
}
const Option = (props:_Select.optionProps) => {
    const {value,children} = props
    return (
        <>

        </>
    )
}
const Select = (props:_Select.selectProps) => {
    const {autoWidth,initValue,placeholder,readonly} = props
    const [ifFocus,setFocus] = useState(false)
    const select_container_ref = useRef() as MutableRefObject<HTMLDivElement>
    const clickContainer = () => {
        if(!ifFocus) {
            setFocus(true)
            setTimeout(()=>{
                window.addEventListener('click',clickWindow)
            })
        }
    }
    const clickWindow = () => {
            setFocus(false)
            window.removeEventListener('click',clickWindow)
    }

    return (
        <div ref={select_container_ref} className={STYLE.select_container + ' ' + (ifFocus ? STYLE.focus : '')} onClick={clickContainer}>
            <Input readonly={readonly} autoWidth={autoWidth} initValue={initValue} placeholder={placeholder}/>
            <ArrowDown width={16} height={16} style={{ padding: 1, marginLeft: 8 }} active={ifFocus} />
            <DropDownBox />
        </div>
    )
}

const DropDownBox = (props:_Select.dropDownBoxProps) => {
    return (
        <>
            <div className={STYLE.dropDownBox_container}>

            </div>
        </>

    )
}
