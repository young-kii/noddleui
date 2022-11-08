import STYLE from './index.module.less'
import {tab, tabsProps} from "@/noddle-components/tabs/types";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import React, {
    ChangeEvent,
    CSSProperties,
    ForwardedRef,
    KeyboardEventHandler,
    MutableRefObject,
    useEffect,
    useRef,
    useState
} from "react";
import AddIcon from "@/noddle-components/icons/add-icon";
import {getPropertyValue, getRandomString} from "@/utils";
import {cardTypes, noddle_main_color} from "@/types/common";
import Switch from "@/noddle-components/switch";
import DismissIcon from "@/noddle-components/icons/dismiss-icon";

const defaultKey = 'default_KEY_@&^'

export default React.forwardRef((props: tabsProps, ref: ForwardedRef<any>) => {

    const {type} = props

    const getType = () => {
        if (type)
            return getPropertyValue(type, cardTypes, 'default')
        return 'default'
    }

    const types = {
        default: <DefaultType {...props}/>,
        card: <CardType {...props}/>
    } as any

    const styles = ClassNameConfig.mClassNames.bind(STYLE)

    const class_container = styles({
        [`${getType()}`]: true
    })

    return (
        <div className={class_container} ref={ref}>
            {
                types[getType()]
            }
        </div>
    )
})

/**
 * 卡片式标签
 * @param props
 * @constructor
 */

const CardType = (props: tabsProps) => {

    const {items, currentTab, outlined, onEdit, showAdd} = props
    const [items_, setItems] = useState(items || [])
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const tabsID = useRef('')
    const newTabIndex = useRef(0)
    const headerRef = useRef() as MutableRefObject<HTMLDivElement>
    const [activeKey, setActiveKey] = useState(defaultKey) as any
    const [editingKey, setEditingKey] = useState(defaultKey) as any
    let header: HTMLDivElement | null = null

    const class_header = styles({
        header: true
    })

    const class_tab = styles({
        tab: true
    })

    const class_add = styles({
        tab: true,
        add: true
    })

    const class_content = styles({
        content: true,
        outlined
    })

    const handleClick = (e: any, key: React.Key, editable?: boolean) => {
        /**
         * 当点击当前选择的header时，进入编辑状态
         */
        if (activeKey === key && editable) {
            setEditingKey(key)
        } else {
            switchTab(key)
        }
        setTimeout(() => headerRef.current.scrollTo({
            left: e.target.offsetLeft,
            behavior: "smooth"
        }), 0)

    }

    const switchTab = (key: React.Key) => {
        setActiveKey(key)
    }

    const addTab = () => {
        const newItems = [...items_]
        const newTabKey = `newTab${newTabIndex.current++}`
        onEdit?.((newTab, callBack) => {
            newItems.push(newTab)
            callBack?.(newItems, items_)
        }, function () {
        }, function () {
        })
        setItems(newItems)
        setActiveKey(newTabKey)
        setTimeout(() => headerRef.current.scrollTo({
            left: headerRef.current.scrollWidth - headerRef.current.offsetWidth,
            behavior: "smooth"
        }), 0)
    }

    const closeTab = (key: React.Key) => {
        let pre = 0
        const newItems = items_.filter((item, index, array) => {
            if (item.key === key) {
                pre = index === array.length - 1 ? index - 1 : index
            }
            return item.key !== key
        })
        if (key === activeKey)
            setActiveKey(newItems[pre].key)
        setItems(newItems)
        onEdit?.(
            function () {
            },
            remove => {
                remove(key, newItems, items_)
            },
            function () {
            }
        )
    }

    const edit = (key: React.Key, value: string) => {
        const newItems = items_.map(item => {
            if (item.key === key)
                return {...item, label: value}
            else return item
        })
        setItems(newItems)
    }

    const onEditFinished = (label: string) => {
        onEdit?.(function () {
            }, function () {
            }, rename => {
                rename(label)
            }
        )
    }

    const renderLabel = (item: tab) => {
        return editingKey === item.key ?
            <InputEditor setEditingKey={setEditingKey}
                         label={item.label}
                         edit={(value) => edit(item.key, value)}
                         editFinished={onEditFinished}
            /> :
            item.closable ?
                <>
                    {item.label}
                    <DismissIcon customHover
                                 style={{marginLeft: 8}}
                                 height={12}
                                 width={12}
                                 color={activeKey === item.key ? noddle_main_color : 'black'}
                                 onClick={(e) => {
                                     e.stopPropagation()
                                     closeTab(item.key)
                                 }}
                    />
                </>
                : item.label
    }

    useEffect(() => {

        header = headerRef.current
        const handleMouseWheel = (e: any) => {
            const delta = -(e.wheelDeltaX + e.wheelDeltaY) * .4
            headerRef.current.scrollTo({
                left: headerRef.current.scrollLeft + delta,
            })
            e.preventDefault()
        }

        header.addEventListener('wheel', handleMouseWheel, {passive: false})

        return () => {
            header?.removeEventListener('wheel', handleMouseWheel,)
        }

    }, [])

    const renderHeader = () => {
        return (
            <div className={class_header} ref={headerRef}>
                {
                    items_?.map((item) => {
                        return <div key={item.key}
                                    className={class_tab}
                                    data-tabsid={tabsID.current}
                                    onClick={(e) => handleClick(e, item.key, item.editable)}
                                    data-active={activeKey === item.key}>
                            {
                                renderLabel(item)
                            }
                        </div>
                    })
                }
                {
                    showAdd &&
                    <div className={class_add} onClick={addTab}>
                        <AddIcon height={14} width={14}/>
                    </div>
                }

            </div>
        )
    }

    useEffect(() => {
        tabsID.current = getRandomString()
        setActiveKey(currentTab || items_[0]?.key)
    }, [])

    const renderContent = () => {
        return (
            <div className={class_content}>
                {
                    items_?.map(item => {
                        return <div key={item.key}
                                    style={{display: item.key === activeKey ? 'block' : 'none'}}>{item.children}</div>
                    })
                }
            </div>
        )
    }

    return (
        <>
            {renderHeader()}
            {renderContent()}
        </>
    )
}

const DefaultType = (props: tabsProps) => {
    const {items, currentTab, outlined, centered} = props
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const [activeKey, setActiveKey] = useState(defaultKey) as any
    const tabsID = useRef('')
    const [sliderX, setSliderX] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0)
    const headerRef = useRef() as MutableRefObject<HTMLDivElement>
    let header: HTMLDivElement | null = null
    const style_slider = {
        transform: `translateX(${sliderX}px)`,
        width: sliderWidth
    } as CSSProperties

    const class_header = styles({
        header: true,
        centered
    })

    const class_tab = styles({
        tab: true
    })

    // const class_add = styles({
    //     tab: true,
    //     add: true
    // })

    const class_content = styles({
        content: true,
        outlined
    })

    const handleClick = (e: any, key: React.Key) => {
        switchTab(key)
        setTimeout(() => headerRef.current.scrollTo({
            left: e.target.offsetLeft,
            behavior: "smooth"
        }), 0)
        // setSliderWidth(e.target.offsetWidth)
        // setSliderX(e.target.offsetLeft)
    }

    const switchTab = (key: React.Key) => {
        setActiveKey(key)
    }

    // const addTab = () => {
    //     const newItems = [...items_]
    //     const newTabKey = `newTab${newTabIndex.current++}`
    //     newItems.push({
    //         label: `Tab ${newTabIndex.current}`,
    //         children: <Switch/>,
    //         key: newTabKey
    //     })
    //     setItems(newItems)
    //     setActiveKey(newTabKey)
    //     setTimeout(() => headerRef.current.scrollTo({
    //         left: headerRef.current.scrollWidth - headerRef.current.offsetWidth,
    //         behavior: "smooth"
    //     }), 0)
    // }


    useEffect(() => {
        tabsID.current = getRandomString()
        setActiveKey(currentTab || items[0]?.key)
    }, [])

    useEffect(() => {
        /**
         * slider起作用的主要原理
         */
        const tabs = document.querySelectorAll(`[data-tabsid=${tabsID.current}]`) as any
        if (tabs && tabs.length !== 0) {
            for (let item of tabs) {
                if (item.dataset.active === 'true') {
                    setSliderWidth(item.offsetWidth)
                    setSliderX(item.offsetLeft)
                }
            }
        }
    }, [activeKey])

    const renderHeader = () => {

        return (
            <div className={class_header} ref={headerRef}>
                <div className={STYLE.tabs}>
                    {
                        items?.map((item) => {
                            return <div key={item.key}
                                        className={class_tab}
                                        data-tabsid={tabsID.current}
                                        onClick={(e) => {
                                            !item.disabled && handleClick(e, item.key)
                                        }}
                                        data-disabled={item.disabled}
                                        data-active={activeKey === item.key}>
                                {item.label}
                            </div>
                        })
                    }
                    <div className={STYLE.slider} style={style_slider}/>
                </div>
                {/*<div className={class_add} onClick={addTab}>*/}
                {/*    <AddIcon height={14} width={14}/>*/}
                {/*</div>*/}
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className={class_content}>
                {
                    items?.map(item => {
                        return <div key={item.key}
                                    style={{display: item.key === activeKey ? 'block' : 'none'}}>{item.children}</div>
                    })
                }
            </div>
        )
    }

    useEffect(() => {
        header = headerRef.current
        const handleMouseWheel = (e: any) => {
            const delta = -(e.wheelDeltaX + e.wheelDeltaY) * .4
            headerRef.current.scrollTo({
                left: headerRef.current.scrollLeft + delta,
            })
            e.preventDefault()
        }
        header.addEventListener('wheel', handleMouseWheel, {passive: false})
        return () => {
            header?.removeEventListener('wheel', handleMouseWheel,)
        }
    }, [])

    return (
        <>
            {renderHeader()}
            {renderContent()}
        </>
    )
}

interface InputEditorProps {
    editFinished: (label: string) => void
    setEditingKey: (key: string) => void
    label: string
    edit: (value: string) => void
}

const InputEditor = (props: InputEditorProps) => {

    const {setEditingKey, label, edit, editFinished} = props
    const inputRef = useRef() as MutableRefObject<HTMLInputElement>
    const labelRef = useRef() as MutableRefObject<HTMLInputElement>
    const [width, setWidth] = useState(labelRef?.current?.offsetWidth || 0)

    const handleSetDefault = () => {
        setEditingKey(defaultKey)
        editFinished?.(label)
    }

    const style_input = {
        width
    } as CSSProperties

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        edit(e.target.value)
        setWidth(labelRef?.current?.offsetWidth + 4)
    }

    const handleKeyUp: KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter')
            handleSetDefault()
    }

    useEffect(() => {
        inputRef.current.focus()
        setWidth(labelRef?.current?.offsetWidth + 4)
    }, [])

    return (
        <div className={STYLE.inputContainer}>
            <input ref={inputRef}
                   style={style_input}
                   onChange={handleChange}
                   className={STYLE.inputEditor}
                   onBlur={handleSetDefault}
                   onKeyUp={handleKeyUp}
                   value={label}
            />
            <span ref={labelRef} className={STYLE.hiddenLabel}>{label}</span>
        </div>
    )
}