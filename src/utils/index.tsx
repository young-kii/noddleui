import {CSSProperties} from "react";
import {link_target} from "@/types";

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
}

export {getLinksToDocument, linkTo, copy}



