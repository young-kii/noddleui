import STYLE from './index.module.less'
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import {innerTagProps, tagProps} from "@/noddle-components/tag/types";
import {
    ChangeEvent,
    CSSProperties,
    KeyboardEventHandler,
    MutableRefObject, useEffect,
    useRef,
    useState
} from "react";
import AddIcon from "@/noddle-components/icons/add-icon";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";
import Space from "@/noddle-components/space";
import Button from "@/noddle-components/button";
import notification from "@/noddle-components/notification";
import {noddle_main_color} from "@/types/common";

export default (props: tagProps) => {
    const {maxCount} = props
    const [tags, setTags] = useState([''])

    return <Space>
        <Button onClick={() =>  {
            let a = tags.filter(item => {
                return item
            })
            notification.success({title: "你选中了如下标签", content: JSON.stringify(a)})
        }
        }>ok</Button>
        <Space>
        {
            tags.map((item, index) => {
                return <Tag_ key={index} maxCount={maxCount || 1} num={index} defaultValue={item} setTags={setTags}
                             tags={tags} {...props}/>
            })
        }
        </Space>
    </Space>
}

const Tag_ = (props: innerTagProps) => {
    const {defaultValue, num, setTags, tags, maxCount} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [tagValue, setTagValue] = useState(defaultValue || '')
    const [panelValue, setPanelValue] = useState('添加')
    const inputRef = useRef('') as unknown as MutableRefObject<HTMLInputElement>
    const [focus, setFocus] = useState(false)
    const class_container = styles({
        container: true,
        notEmpty: tagValue
    })
    const style_container = {
        border: focus && `1px solid ${noddle_main_color}`
    } as CSSProperties
    const class_panel = styles({
        panel: true
    })
    const class_input = styles({
        input: true
    })
    const handleClick = () => {
        setFocus(true)
        setTimeout(() => inputRef.current.focus(), 0)
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTagValue(e.target.value)
    }
    const handleFocus = () => {
        setFocus(true)
    }
    const handleBlur = () => {
        setFocus(false)
        if (inputRef.current.value === '')
            return setPanelValue('添加')
        setPanelValue(inputRef.current.value)
        let newTags = [...tags]
        newTags.splice(num, 1, inputRef.current.value)
        if (tags.length < maxCount && newTags.indexOf('') === -1)
            newTags.push('')
        setTags([])
        setTags?.(newTags)
    }
    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter')
            handleBlur()
    }
    const handleClear = (e: any) => {
        e.stopPropagation()
        setTagValue('')
        let newTags = [...tags]
        newTags.splice(num, 1)
        if (tags.length <= maxCount && newTags.indexOf('') === -1)
            newTags.push('')
        setTags(newTags)
    }
    useEffect(() => {
        if (!tagValue || !defaultValue) {
            setPanelValue('添加')
        }
        setTagValue(defaultValue)
        if (defaultValue)
            setPanelValue(defaultValue)
    }, [defaultValue])
    return (
        <>
            <div className={class_container} style={style_container}>
                <div className={class_panel} onClick={handleClick}>
                    {
                        !tagValue && <AddIcon height={14} width={14} style={{marginRight: 4}}/>
                    }
                    {panelValue}
                    {
                        tagValue &&
                        <div className={STYLE.dismissIconContainer}>
                            <DismissIcon height={12} width={12} onClick={handleClear}/>
                        </div>
                    }
                </div>
                <div className={class_panel} style={{height: 0, visibility: "hidden"}} onClick={handleClick}>
                    {
                        !tagValue &&
                        <AddIcon height={16} width={16} style={{marginRight: 4}}/>
                    }
                    {tagValue}
                </div>
                {
                    focus && <input onKeyUp={handleKeyUp} onFocus={handleFocus} ref={inputRef} onBlur={handleBlur}
                                    className={class_input}
                                    value={tagValue}
                                    onChange={handleChange}/>
                }
            </div>
        </>
    )
}
