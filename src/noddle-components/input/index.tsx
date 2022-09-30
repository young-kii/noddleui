import STYLE from './index.module.less'
import React, {createContext, MutableRefObject, useContext, useEffect, useRef, useState} from "react";
import _Input from "@/noddle-components/input/types";


export const inputContext = createContext({})

export default (_props: _Input.inputProps) => {
    const {Provider} = inputContext

    const [props, setProps] = useState(_props)
    useEffect(() => {
        setProps(_props)
    }, [_props])

    return (
        <Provider value={{props, setProps}}>
            <PureInput/>
        </Provider>
    )
}

const PureInput = () => {
    const _props = useContext(inputContext)
    const {props, setProps} = _props as _Input.inputContext
    const {placeholder, autoWidth, initWidth, readonly, value, onChange} = props
    const [inputWidth, setInputWidth] = useState(initWidth || 70)
    const input = useRef() as MutableRefObject<HTMLInputElement>
    const input_span = useRef() as MutableRefObject<HTMLElement>
    if (autoWidth) useEffect(() => {
        setInputWidth(input_span.current.offsetWidth)
    }, [value])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProps({...props, value: event.target.value})
    }
    useEffect(() => {
        if (onChange)
            onChange(props.value)
    }, [props])

    return (
        <div className={STYLE.input_container}>
            <input readOnly={readonly} ref={input}
                   style={{width: inputWidth, minWidth: initWidth || autoWidth ? (value ? 0 : 70) : 70}}
                   placeholder={placeholder || 'input...'}
                   className={STYLE.input} value={value || ''}
                   onChange={(event) => handleChange(event)}/>
            <span ref={input_span} className={STYLE.input_span}>{value || ''}</span>
        </div>
    )
}

