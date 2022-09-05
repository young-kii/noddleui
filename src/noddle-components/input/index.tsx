import STYLE from './index.module.less'
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import _Input from "@/noddle-components/input/index.d";

export default (props: _Input.inputProps) => {
    return (
        <>
            <PureInput {...props}/>
        </>
    )
}

const PureInput = (props: _Input.pureInputProps) => {
    const {placeholder, initValue, autoWidth, initInputWidth, readonly, value} = props
    const [inputValue, setInputValue] = useState(initValue || '')
    const [inputWidth, setInputWidth] = useState(initInputWidth || 70)
    const input = useRef() as MutableRefObject<HTMLInputElement>
    const input_span = useRef() as MutableRefObject<HTMLElement>

    if (autoWidth) useEffect(() => {
        setInputWidth(input_span.current.offsetWidth)
    }, [inputValue])

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }
    return (
        <div className={STYLE.input_container}>
            <input readOnly={readonly} ref={input} style={{width: inputWidth}} placeholder={placeholder || 'input...'}
                   className={STYLE.input} value={inputValue}
                   onChange={(event) => handleChange(event)}/>
            <span ref={input_span} className={STYLE.input_span}>{inputValue}</span>
        </div>
    )
}

