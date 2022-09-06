import STYLE from './index.module.less'
import _Select from "@/noddle-components/select/index.d";
import Input, {inputContext} from "@/noddle-components/input";
import {createContext, MutableRefObject, useContext, useEffect, useRef, useState} from "react";
import ArrowDown from "@/noddle-components/icons/arrow-down";
import {_context} from "@/noddle-components/globalConfig/index.d";
import react from "@vitejs/plugin-react";
import {LocaleConfig} from "@/noddle-components/globalConfig/Config";

export const selectContext = createContext({})

export default (_props: _Select.selectProps) => {
    const {Provider} = selectContext
    const [props, setProps] = useState(_props)
    return (
        <Provider value={{props, setProps}}>
            <Select/>
        </Provider>
    )
}


const Select = () => {
    const context = useContext(selectContext)
    const {props, setProps} = context as _context
    // const [_props] = useState(props)
    const {autoWidth, initValue, placeholder, readonly, children, value} = props
    console.log(props)
    const [ifFocus, setFocus] = useState(false)
    const isChildrenOption = () => {
        let flag = true, selectedValue = null, selectedLabel = null, filterChildren = <></>
        if (children)
            if (children[0]) {
                for (let child of children) {
                    if (child.type.name !== 'Option') flag = false
                    else {
                        filterChildren = <>{filterChildren}{child}</>
                        if (child.props.value === initValue)
                        {
                            selectedValue = child.props.value
                            selectedLabel = child.props.children
                        }
                    }
                }
            } else if (children.type.name !== 'Option') flag = false
            else {
                selectedValue = children.props.value
                selectedLabel = children.props.children
                filterChildren = children
            }
        return [flag, selectedValue, selectedLabel, filterChildren]
    }

    useEffect(() => {
        const [flag, selectedValue, selectedLabel, filterChildren] = isChildrenOption()
        if (flag) setProps({...props, value: selectedValue,label:selectedLabel, children: filterChildren, })
        else setProps({...props, value: selectedValue,label:selectedLabel, children: <>夹杂了奇怪的东西</>})
    }, [])
    useEffect(()=>{
        console.log(11,props)
    },[props])

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
        <div className={STYLE.select_container + ' ' + (ifFocus ? STYLE.focus : '')}
             onClick={clickContainer}>
            <Input value={value} readonly={readonly} autoWidth={autoWidth}
                   placeholder={placeholder}/>
            <ArrowDown width={16} height={16} style={{padding: 1, marginLeft: 8}} active={ifFocus}/>
            <DropDownBox focus={ifFocus}>{children}</DropDownBox>
        </div>
    )
}

const DropDownBox = (props: _Select.dropDownBoxProps) => {
    const {children, focus} = props
    return (
        <>
            <div className={STYLE.dropDownBox_container + ' ' + (focus ? '' : STYLE.hide)}>
                {children}
            </div>
        </>

    )
}

export const Option = ({value,children}) => {
    console.log(value,children)
    const context = useContext(selectContext) as _context
    const {props, setProps} = context
    const [selected,setSelected] = useState(value === props.value)
    const click = () => {
        setProps({...props, value})
    }
    // useEffect(()=>{
    //     setProps({...props, value})
    // },[])
    useEffect(()=>{
        // console.log(selected)
        setSelected(value === props.value)
    },[props])
    return (
        <>
            <div onClick={click} className={STYLE.option + ' ' + (selected  ? STYLE.option_selected : '')}>
                <span>{children}</span>
            </div>
        </>
    )
}
