import React, {CSSProperties, ReactNode} from "react";
import {ColumnsType} from "@/noddle-components/table";
import Text from "@/noddle-components/text";

type direction = 'horizontal' | 'vertical'

type themeTypes = 'danger' | 'default' | 'primary' | 'warning' | 'success'

interface spaceProps {
    children: ReactNode[] | ReactNode
    direction?: direction
    gap?: number
    width?: CSSProperties["width"]
    height?: CSSProperties["height"]
}

interface DataType {
    property: string
    description?: string | ReactNode
    type: string | ReactNode
    defaultValue: string | ReactNode
    required: 'YES' | 'NO'
}

const noddle_main_color = '#0252D9FF'
type link_target = '_blank' | '_self' | '_three' | '_top' | string
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

export type {direction, spaceProps, DataType, themeTypes, link_target}
export {apiTableColumns, noddle_main_color}