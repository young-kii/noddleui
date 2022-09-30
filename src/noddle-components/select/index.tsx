import STYLE from './index.module.less'
import _Select from "@/noddle-components/select/types";
import Input from "@/noddle-components/input";
import {createContext, useContext, useEffect, useState} from "react";
import ArrowDown from "@/noddle-components/icons/arrow-down";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";


export const selectContext = createContext({})

export default (_props: _Select.selectProps) => {
    const {Provider} = selectContext
    const {children, value} = _props
    const isChildrenOption = () => {
        let flag = true, selectedValue = null, _map = {} as { [key: string]: any }
        if (children)
            if (children[0]) {
                for (let child of children) {
                    if (child.props)
                        if (child.props.value) {
                            _map[child.props.value] = child.props.children
                            if (child.type.name !== 'Option') flag = false
                            else {
                                if (child.props.value === value) {
                                    selectedValue = child.props.value
                                }
                            }
                        } else flag = false
                }
            } else if (children.type.name !== 'Option') flag = false
            else {
                _map[children.props.value] = children.props.children
                selectedValue = children.props.value
            }
        return [flag, _map]
    }
    const [flag, _map] = isChildrenOption()
    let newProps
    newProps = {..._props,_map}
    // else newProps = ({..._props, value: '', _map, children: <NoddleLink to={'questions'} >Something Wrong ...</NoddleLink>})
    const [props, setProps] = useState(newProps)
    return (
        <Provider value={{props, setProps}}>
            <Select/>
        </Provider>
    )
}


const Select = () => {
    const context = useContext(selectContext)
    const {props} = context as _Select.selectContext
    const {children, onChange, value, _map} = props
    const [ifFocus, setFocus] = useState(false)
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_container = styles({
        select_container: true,
        focus: ifFocus
    })
    useEffect(() => {
        if (value)
            if (onChange) {
                onChange({
                    value: value,
                    label: _map ? _map[value] : ''
                })
            }
    }, [props])

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
    const arrayDownStyle = {
        padding: 1,
        marginLeft: 8
    }

    return (
        <div className={style_container}
             onClick={clickContainer}>
            <Input {...{...props, value: _map ? _map[value] : '', onChange: () => null}}/>
            <ArrowDown width={16} height={16} style={arrayDownStyle} active={ifFocus}/>
            <DropDownBox focus={ifFocus}>{children}</DropDownBox>
        </div>
    )
}

const DropDownBox = (props: _Select.dropDownBoxProps) => {
    const {children, focus} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const dropDownBox_Container = styles({
        dropDownBox_container: true,
        hide: !focus
    })
    return (
        <>
            <div className={dropDownBox_Container}>
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
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const option = styles({
        option: true,
        option_selected: selected
    })
    const click = () => {
        setProps({...props, value})
    }
    useEffect(() => {
        setSelected(value === props.value)
    }, [props])
    return (
        <>
            <div onClick={click} className={option}>
                <span>{children}</span>
            </div>
        </>
    )
}
