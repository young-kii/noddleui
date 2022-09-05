import STYLE from './index.module.less'
import _Select from "@/noddle-components/select/index.d";
import Input from "@/noddle-components/input";
import {MutableRefObject, useRef, useState} from "react";
import ArrowDown from "@/noddle-components/icons/arrow-down";

export default (props: _Select.selectProps) => {
    return (
        <>
            <Select {...props} />
        </>
    )
}



const Select = (props: _Select.selectProps) => {
    const {autoWidth, initValue, placeholder, readonly, children, value} = props
    const [ifFocus, setFocus] = useState(false)
    const childrenMap = {} as any
    if(children)for(let child of children) {
        childrenMap[child.props?.value] = child.props?.children
    }
    const select_container_ref = useRef() as MutableRefObject<HTMLDivElement>
    const clickContainer = () => {
        if (!ifFocus) {
            setFocus(true)
            setTimeout(() => {
                window.addEventListener('click', clickWindow)
            })
        }
    }
    const clickWindow = () => {
        setFocus(false)
        window.removeEventListener('click', clickWindow)
    }

    return (
        <div ref={select_container_ref} className={STYLE.select_container + ' ' + (ifFocus ? STYLE.focus : '')}
             onClick={clickContainer}>
            <Input value={value} readonly={readonly} autoWidth={autoWidth} initValue={childrenMap[initValue]} placeholder={placeholder}/>
            <ArrowDown width={16} height={16} style={{padding: 1, marginLeft: 8}} active={ifFocus}/>
            <DropDownBox focus={ifFocus}>{children}</DropDownBox>
        </div>
    )
}

const DropDownBox = (props: _Select.dropDownBoxProps) => {
    const { children, focus } = props
    return (
        <>
            <div className={STYLE.dropDownBox_container + ' ' + (focus ? '' : STYLE.hide)}>
                {children}
            </div>
        </>

    )
}

export const Option = (props: _Select.optionProps) => {
    const {value, children, selected, onClick } = props
    return (
        <>
            <div onClick={onClick} className={STYLE.option + ' ' + (selected ? STYLE.option_selected : '')} data-value={value}>
                <span>{children}</span>
            </div>
        </>
    )
}
