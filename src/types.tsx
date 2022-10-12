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
const noddle_main_color = '#0252D9FF'
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
    if(value)
        return map?.indexOf(value) > -1 ? value : defaultValue
    return defaultValue
}

export type {direction, DataType, themeTypes, link_target, size}
export {apiTableColumns, codeBoxConfigPanelStyle}
export {noddle_main_color, themes_array}
export {sizes_Base, sizes_font}
export {sizes_font_map}
export {getPropertyValue}