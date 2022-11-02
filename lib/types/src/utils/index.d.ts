import { CSSProperties } from "react";
import { link_target } from "../types/common";
interface getLinksToDocumentDataType {
    topic: 'CSS' | 'Javascript';
    property: keyof CSSProperties;
}
interface linkToData {
    url: URL;
    target?: link_target;
}
declare const getLinksToDocument: (topic: getLinksToDocumentDataType["topic"], property: getLinksToDocumentDataType["property"]) => URL;
declare const linkTo: (url: linkToData["url"], target?: linkToData["target"]) => void;
declare const copy: (value: string) => string;
declare const getPropertyValue: (value: any, map: any[], defaultValue: any) => any;
/**
 * 随机生成字符串
 * @param len 指定生成字符串长度
 */
declare const getRandomString: (len?: number) => string;
export { getPropertyValue, getRandomString };
export { getLinksToDocument, linkTo, copy };
