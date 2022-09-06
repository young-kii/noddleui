import STYLE from './index.module.less'
import React, {createContext, MutableRefObject, useContext, useEffect, useRef, useState} from "react";
import _Input from "@/noddle-components/input/index.d";
import {_function, _object} from "@/noddle-components/globalConfig/index.d";
import {selectContext} from "@/noddle-components/select";

export const inputContext = createContext({})

export default (_props: _Input.inputProps) => {
    // console.log(_props)
    const {Provider} = inputContext
    const [props,setProps] = useState(_props)

    return (
        <Provider value={{props,setProps}}>
            <PureInput/>
        </Provider>
    )
}

const PureInput = () => {
    const _props = useContext(inputContext)
    const {props,setProps} = _props as _function
    useEffect(()=>{
        console.log(props)

    },[])

    // console.log(props)
    // console.log(_props)
    const {placeholder, initValue, autoWidth, initInputWidth, readonly, value} = props
    // const [inputValue, setInputValue] = useState(initValue || '')
    const [inputWidth, setInputWidth] = useState(initInputWidth || 70)
    const input = useRef() as MutableRefObject<HTMLInputElement>
    const input_span = useRef() as MutableRefObject<HTMLElement>

    if (autoWidth) useEffect(() => {
        // setTimeout(()=>{setInputWidth(input_span.current.offsetWidth),console.log(input_span.current.offsetWidth)},1000)

        setInputWidth(input_span.current.offsetWidth)
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProps({...props,value:event.target.value})
        // setInputValue(event.target.value)
    }

    return (
        <div className={STYLE.input_container}>
            <input readOnly={readonly} ref={input} style={{width: inputWidth }} placeholder={placeholder || 'input...'}
                   className={STYLE.input} value={ value || initValue}
                   onChange={(event) => handleChange(event)}/>
            <span ref={input_span} className={STYLE.input_span}>{value || initValue}</span>
        </div>
    )
}

