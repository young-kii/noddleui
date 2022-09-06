import STYLE from './index.module.less'
import _Select from "@/noddle-components/select/index.d";
import Input from "@/noddle-components/input";
import {createContext, useContext, useEffect, useState} from "react";
import ArrowDown from "@/noddle-components/icons/arrow-down";
import {NavLink} from "react-router-dom";
import NoddleLink from "@/components/noddle-link/index";


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
    const {props, setProps} = context as _Select.selectContext
    const {initValue, children, onChange, value} = props
    const [ifFocus, setFocus] = useState(false)
    const [label, setLabel] = useState('')
    const isChildrenOption = () => {
        let flag = true, selectedValue = null, _map = {} as { [key: string]: any }
        if (children)
            if (children[0]) {
                for (let child of children) {
                    if (child.props)
                        if (child.props.value)
                        {
                            _map[child.props.value] = child.props.children
                            if (child.type.name !== 'Option') flag = false
                            else {
                                if (child.props.value === initValue) {
                                    selectedValue = child.props.value
                                    setLabel(child.props.children)
                                }
                            }
                        }
                    else flag = false
                }
            } else if (children.type.name !== 'Option') flag = false
            else {
                _map[children.props.value] = children.props.children
                selectedValue = children.props.value
                setLabel(children.props.children)
            }
        return [flag, selectedValue, _map]

    }
    useEffect(() => {
        const [flag, selectedValue, _map] = isChildrenOption()
        setProps({...props, value: selectedValue, _map})
        // if (flag) setProps({...props, value: selectedValue, _map})
        // else setProps({...props, value: selectedValue, _map, children: <NoddleLink to={'questions'} >Something Wrong ...</NoddleLink>})
    }, [])
    useEffect(() => {
        const {_map, value} = props
        if (_map)
            setLabel(_map[value])
    }, [props])
    useEffect(() => {
        if (value)
            if (onChange) onChange({
                value: value,
                label: label
            })
    }, [label])
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
            <Input {...{...props, value: label, onChange: () => null}}/>
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

export const Option = (_props: _Select.optionProps) => {
    const {value, children} = _props
    const context = useContext(selectContext) as _Select.selectContext
    const {props, setProps} = context
    const [selected, setSelected] = useState(value === props.value)
    const click = () => {
        setProps({...props, value})
    }
    useEffect(() => {
        setSelected(value === props.value)
    }, [props])
    return (
        <>
            <div onClick={click} className={STYLE.option + ' ' + (selected ? STYLE.option_selected : '')}>
                <span>{children}</span>
            </div>
        </>
    )
}
