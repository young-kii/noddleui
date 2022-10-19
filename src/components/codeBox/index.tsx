import STYLE from './index.module.less';
import './index.less';
import {MutableRefObject, useEffect, useRef, useState} from "react";
import _CodeBox from "@/components/codeBox/types";
import {ClassNameConfig, useTranslation} from "@/noddle-components/globalConfig/Config";
import CopyIcon from "@/noddle-components/icons/copy-icon";
import Button from "@/noddle-components/button";
import CodeIcon from "@/noddle-components/icons/code-icon";
import Space from "@/noddle-components/space";
import BugIcon from "@/noddle-components/icons/bug-icon";
import header from "@/layout/header";
import Divider from "@/noddle-components/divider";
import LaucherSetting from "@/noddle-components/icons/laucher-setting";
import Tooltips from "@/noddle-components/tooltips";
import {copy, getLinksToDocument, linkTo} from "@/utils";
import ArrowHookUpLeft from "@/noddle-components/icons/arrow-hook-up-left";
import message from "@/noddle-components/message";


const keywords = new Set(['boolean', 'type', 'true', 'false', 'new', 'as', 'any', 'if', 'of', 'else', 'var', 'import', 'export', 'let', 'default', 'function', 'from', 'const', 'return']);
const punctuation = new Set(['.', '(', ')', '{', '}', '=', '<', '>', '[', ']', ':', '/']);
const tags = new Set(['Cascader', 'div', 'Button', 'Space', 'Text']);
const special = ['React']

export default (props: _CodeBox.codeBoxProps) => {
    const {children, height, width, config, onReset, isConfigChanged} = props
    const code = props?.code || ''
    const position = props?.position || 'left'
    const positionMap = {
        left: 'flex-start',
        right: 'flex-end',
        center: 'center'
    }
    const codeRef = useRef() as MutableRefObject<HTMLElement>
    const pre = useRef() as any
    const translate = useTranslation()
    const [showCode, setShowCode] = useState(false)
    const [showConfig, setShowConfig] = useState(false)
    const [calcHeight, setCalcHeight] = useState(0)
    const [copyStatus, setCopyStatus] = useState(false)
    const copyWord = copyStatus ? translate('common.copied') : translate('common.copy')
    const copyTheme = copyStatus ? 'success' : 'default'
    const styles = ClassNameConfig.mClassNames.bind(STYLE)

    const style_pre = styles({
        hide: !showCode,
        codeContainer: true
    })

    let codeArray = code.split('')
    let functionSet = new Set()
    const compile = (getResult: boolean) => {
        let currentArray = '', newArray = ''
        let markCount = 0
        let inTag = false
        let inCurlyBracket = false
        let result = codeArray.reduce((previousValue, currentValue, currentIndex, array) => {
            if (!getResult) {
                if (currentValue === '(') {
                    if (currentArray.trim()) functionSet.add(currentArray.trim().split(' ').at(-1))
                }
                // let reg = /((var|const|let)\s*(?<arrowFun>\S*)\s*=\s*\(.*\))|(\s*(?<fun>\w*)\s*\(.*\))/g
                // let functions = code.matchAll(reg)
                // for (let fun of functions) {
                //     if (fun.groups?.arrowFun)
                //         functionSet.add(fun.groups?.arrowFun)
                //     if (fun.groups?.fun)
                //         functionSet.add(fun.groups.fun)
                // }
            }
            if (currentValue === "'" || currentValue === '"') {
                markCount++
                if (markCount === 2) {
                    currentArray += currentValue
                    newArray = currentArray
                    currentArray = ''
                    markCount = 0
                    if (!inTag)
                        return previousValue + `<span class="noddle-mark">${newArray}</span>`
                    return previousValue + `<span class="noddle-inTagValue">${newArray}</span>`
                }
            }
            if (markCount === 1) {
                currentArray += currentValue
                return previousValue
            }
            if (punctuation.has(currentValue)) {
                let className = 'noddle-punctuation'
                newArray = currentArray
                if (currentValue === '<') {
                    inTag = true
                    className = 'noddle-tags'
                }
                if (currentValue === '>') {
                    if (inTag)
                        className = 'noddle-tags'
                    inTag = false
                }
                if (currentValue === '/') {
                    className = 'noddle-tags'
                }
                if (currentValue === ':') {
                    if (!inTag)
                        newArray = `<span class="noddle-objectKey">${currentArray}</span>`
                }
                if (currentValue === '=') {
                    if (inTag) {
                        className = 'noddle-mark'
                        newArray = `<span class="noddle-mark">${newArray}</span>`
                    }
                }
                if (currentValue === '{') {
                    inCurlyBracket = true
                }
                if (currentValue === '}') {
                    inCurlyBracket = false
                    if (inTag)
                        newArray = `<span class="noddle-inTagValue">${newArray}</span>`
                }
                currentArray = ''
                return previousValue + newArray + `<span class="${className}">${currentValue}</span>`
            } else if (currentValue === ',' || currentValue === ';') {
                newArray = currentArray
                currentArray = ''
                return previousValue + newArray + `<span class="noddle-comma">${currentValue}</span>`
            } else {
                currentArray += currentValue
                if (keywords.has(currentArray)) {
                    if (currentIndex !== array.length - 1 && array[currentIndex + 1] === ' ') {
                        newArray = currentArray
                        currentArray = ''
                        return previousValue + `<span class="noddle-keywords">${newArray}</span>`
                    }
                } else if (tags.has(currentArray)) {
                    if (inTag) {
                        newArray = currentArray
                        currentArray = ''
                        if (array[currentIndex + 1] === '>') {
                            if (array[currentIndex - newArray.length] === '<' || array[currentIndex - newArray.length] === ' ' || array[currentIndex - newArray.length] === '/')
                                return previousValue + `<span class="noddle-tags">${newArray}</span>`
                        } else if (array[currentIndex - newArray.length] === '<') {
                            if (array[currentIndex + 1] === '>' || array[currentIndex + 1] === ' ')
                                return previousValue + `<span class="noddle-tags">${newArray}</span>`
                        }
                        return previousValue + `<span>${newArray}</span>`
                    }
                    return previousValue
                } else if (functionSet.has(currentArray) && (array[currentIndex + 1] === ' ' || punctuation.has(array[currentIndex + 1]))) {
                    if (inTag) {
                        if (inCurlyBracket) {
                            newArray = currentArray
                            currentArray = ''
                            return previousValue + `<span class="noddle-functions">${newArray}</span>`
                        }
                    } else {
                        newArray = currentArray
                        currentArray = ''
                        return previousValue + `<span class="noddle-functions">${newArray}</span>`
                    }
                } else if (currentArray === '\n' || currentArray === '\t') {
                    currentArray = ''
                    return previousValue + `<span>${currentValue}</span>`
                } else if (currentValue === ' ' || currentArray === ' ') {
                    newArray = currentArray
                    currentArray = ''
                    return previousValue + `<span>${newArray}</span>`
                } else if (currentIndex === array.length - 1) {
                    return previousValue + currentArray
                }
                return previousValue
            }
        }, '')
        if (getResult) return result
        return ''
    }

    const show = () => {
        setShowCode(!showCode)
    }

    const handleShowConfig = () => {
        setShowConfig(!showConfig)
    }

    const handleCopy = () => {
        setCopyStatus(true)
        copy(codeRef.current.innerText)
        console.log('copy')
    }

    const renderConfig = () => {
        if (config && showConfig)
            return config
    }
    useEffect(() => {
        compile(false)
        codeRef.current.innerHTML = compile(true)
        setCalcHeight(codeRef.current.offsetHeight + 42)
    }, [code])

    return <>
        <div className={STYLE.codeBoxContainer} style={{width: width || '100%'}}>
            <div className={STYLE.view} style={{justifyContent: positionMap[position]}}>
                {children}
            </div>
            {
                renderConfig()
            }
            <div className={STYLE.option_buttons}>
                <Space gap={4}>
                    {
                        config ?
                            <Space gap={4}>
                                {
                                    isConfigChanged ?
                                        <div className={STYLE.option_button} onClick={onReset}>
                                            <ArrowHookUpLeft/>
                                        </div>
                                        : ''
                                }
                                <div className={STYLE.option_button} onClick={handleShowConfig}>
                                    <LaucherSetting/>
                                </div>
                            </Space>
                            :
                            <></>
                    }
                    <div className={STYLE.option_button} onClick={show}>
                        <CodeIcon/>
                    </div>
                </Space>
            </div>
            <div className={STYLE.code_area}>
                <div className={style_pre} style={{height: height || calcHeight}} ref={pre}>
                    <div className={STYLE.copy} onClick={handleCopy}>
                        <Tooltips tips={copyWord} size={'small'} theme={copyTheme} handleMouseLeave={() => {
                            setTimeout(() => {
                                setCopyStatus(false)
                            }, 300)
                        }}>
                            <CopyIcon width={24} height={24}/>
                        </Tooltips>
                    </div>
                    <pre>
              <code className={STYLE.code} ref={codeRef}/>
          </pre>
                </div>
            </div>
        </div>
    </>
}
