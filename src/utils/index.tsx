import {CSSProperties} from "react";
import {link_target} from "@/types/common";

interface getLinksToDocumentDataType {
    topic: 'CSS' | 'Javascript'
    property: keyof CSSProperties
}

interface linkToData {
    url: URL,
    target?: link_target
}

const getLinksToDocument = (topic: getLinksToDocumentDataType["topic"],property: getLinksToDocumentDataType["property"]) => {
    property = property.split('').reduce((previousValue, currentValue) => {
        return currentValue >= 'A' && currentValue <= 'Z' ? previousValue + '-' + currentValue.toLocaleLowerCase() : previousValue + currentValue
    },'') as getLinksToDocumentDataType["property"]
    return `https://developer.mozilla.org/en-US/docs/Web/${topic}/${property}` as unknown as URL
}

const linkTo = (url: linkToData["url"], target?: linkToData["target"]) => {
    window.open(url, target || '_blank')
}

const copy = (value: string) => {
    const input = document.createElement('textarea')
    input.setAttribute('readonly','readonly')
    input.setAttribute('style', 'position: absolute; opacity: 0;')
    input.value = value
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
    return value
}

const getPropertyValue = (value: any, map: any[], defaultValue: any) => {
    if (value)
        return map?.indexOf(value) > -1 ? value : defaultValue
    return defaultValue
}

/**
 * 随机生成字符串
 * @param len 指定生成字符串长度
 */
const getRandomString = (len?: number) => {
    let _charStr = 'abacdefghjklmnopqrstuvwxyz',
        min = 0,
        max = _charStr.length - 1,
        _str = '';
    //定义随机字符串 变量
    //判断是否指定长度，否则默认长度为15
    len = len || 15;
    //循环生成字符串
    for (let i = 0, index; i < len; i++) {
        index = (function (randomIndexFunc, i) {
            return randomIndexFunc(min, max, i, randomIndexFunc);
        })(function (min: number, max: number, i: number, _self: (arg0: any, arg1: any, arg2: any, arg3: any) => number) {
            let indexTemp = Math.floor(Math.random() * (max - min + 1) + min),
                numStart = _charStr.length - 10;
            if (i == 0 && indexTemp >= numStart) {
                indexTemp = _self(min, max, i, _self);
            }
            return indexTemp;
        }, i);
        _str += _charStr[index];
    }
    return _str;
}

export {getPropertyValue, getRandomString}

export {getLinksToDocument, linkTo, copy}



