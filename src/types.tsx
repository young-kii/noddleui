import React, {CSSProperties, ReactNode} from "react";
import {ColumnsType} from "@/noddle-components/table";
import Text from "@/noddle-components/text";

type direction = 'horizontal' | 'vertical'
type size = 'nano' | 'small' | 'medium' | 'large' | 'great'
type themeTypes = 'danger' | 'default' | 'primary' | 'warning' | 'success'

interface DataType {
    property: string
    description?: string | ReactNode
    type: string | ReactNode
    defaultValue: string | ReactNode
    required: 'YES' | 'NO'
}

type link_target = '_blank' | '_self' | '_three' | '_top' | string
const themes_array = ['default', 'danger', 'primary', 'warning', 'success'] as themeTypes[]
const themes_message_array = ['danger', 'primary', 'warning', 'success'] as themeTypes[]
const noddle_main_color = '#0252D9FF'
const noddle_theme_colors = {
    danger: '#f20a0a',
    success: '#0fa40f',
    warning: '#ffa200',
    primary: noddle_main_color,
    default: '#DCDCDCFF'
} as any

const cardTypes = ['default', 'card']
const codeBoxConfigPanelStyle = {padding: '24px 40px 0 40px'}
const sizes_Base = ['nano', 'small', 'medium', 'large', 'great'] as size[]
const sizes_font = {...sizes_Base}
const sizes_font_map = {
    nano: 12,
    small: 14,
    medium: 16,
    large: 18,
    great: 24
} as any

const apiTableColumns: ColumnsType<DataType> = [
    {
        title: '参数',
        dataIndex: 'property',
        headerStyle: {
            whiteSpace: "nowrap"
        },
        cellStyle: {
            whiteSpace: "nowrap"
        },
        render: value => <strong>{value}</strong>
    },
    {
        title: '说明',
        dataIndex: 'description',
        cellStyle: {
            minWidth: 200
        }
    },
    {
        title: '类型',
        dataIndex: 'type',
        cellStyle: {
            minWidth: 100,
            wordBreak: "break-word"
        },
        render: value => typeof value === 'string' ? <Text type={"danger"} bolder pure>{value}</Text> : value
    },
    {
        title: '默认值',
        dataIndex: 'defaultValue',
        position: "center",
        headerStyle: {
            whiteSpace: "nowrap"
        },
        cellStyle: {
            whiteSpace: "nowrap",
        },
    },
    {
        title: '必传',
        dataIndex: 'required',
        position: "center",
        headerStyle: {
            whiteSpace: "nowrap"
        },
        cellStyle: {
            whiteSpace: "nowrap"
        },
        render: value => <Text fontSize={12} color={'black'} pure>{value}</Text>
    }
]

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

export type {direction, DataType, themeTypes, link_target, size}
export {apiTableColumns, codeBoxConfigPanelStyle}
export {noddle_main_color, noddle_theme_colors, themes_message_array, themes_array}
export {sizes_Base, sizes_font}
export {sizes_font_map}
export {cardTypes}
export {getPropertyValue, getRandomString}