import _Table from "@/noddle-components/table/types";
import STYLE from './index.module.less'
import React, {CSSProperties} from "react";
import table from "@/pages/components/table";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";
import BeachIcon from "@/noddle-components/icons/beach-icon";


export type ColumnsType<T> = {
    position?: 'left' | 'center' | 'right'
    title: string,
    headerStyle?: CSSProperties,
    cellStyle?: CSSProperties,
    dataIndex: keyof T,
    render?: (value: any, records: T) => any
}[]

export default (props: _Table.tableProps) => {
    const {
        dataSource,
        columns,
        titleAlign,
        cellAlign,
        wrap,
        autoWidth,
        bordered,
        cellPadding,
        fontSize,
        outline,
        crossing,
        rowKey
    } = props

    const newColumns = columns ? (columns.length === 0 ? [] : columns) : [] as ColumnsType<any>

    const newData = dataSource ? (dataSource.length === 0 ? [] : dataSource) : [] as typeof dataSource
    const newTitleAlign = titleAlign || 'left'
    const newCellAlign = cellAlign || 'left'
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const CLASS_container = styles({
        container: true,
        outline: outline || bordered,
        crossing
    })
    const class_container = {
        width: autoWidth ? 'max-content' : '100%',
        fontSize: fontSize || 14
    }
    const class_th_props = {
        left: newTitleAlign === 'left',
        right: newTitleAlign === 'right',
        center: newTitleAlign === 'center',
        nowrap: wrap === "nowrap",
        bordered
    }

    const class_td_props = {
        left: newCellAlign === 'left',
        right: newCellAlign === 'right',
        center: newCellAlign === 'center',
        nowrap: wrap === "nowrap",
        bordered
    }

    return (
        <div className={CLASS_container} style={class_container}>
            <table cellPadding={cellPadding === 0 ? 0 : cellPadding ? cellPadding : 16} cellSpacing={0}>
                <thead className={STYLE.header}>
                <tr>
                    {
                        newColumns.map(item => {
                            const className = styles({...class_th_props, [`${item.position}`]: true})
                            return <th className={className} style={{...item.headerStyle}}
                                       key={item.dataIndex}>{item.title}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    newData.map((item) => {
                        return <tr key={rowKey ? item[rowKey] : item.key}>
                            {
                                newColumns.map(column => {
                                    const className = styles({...class_td_props, [`${column.position}`]: true})
                                    let content: JSX.Element = <td className={className} key={column.dataIndex}/>
                                    Object.keys(item).map((key, index) => {
                                        if (key === column.dataIndex) {
                                            if (column.render && typeof column.render === "function") {
                                                content = <td className={className}
                                                              style={{...column.cellStyle}}
                                                              key={index}>
                                                    {
                                                        column.render(item[key], item)
                                                    }
                                                </td>
                                            } else content = <td className={className} style={{
                                                ...column.cellStyle,
                                            }}
                                                                 key={index}>{item[key]}</td>
                                        }
                                        return false
                                    })
                                    return content
                                })
                            }
                        </tr>
                    })
                }
                </tbody>
            </table>
            {
                newData.length === 0 ? <Empty/> : ''
            }
        </div>
    )
}

const Empty = () => {
    return (
        <div className={STYLE.empty}>
            <BeachIcon/>
            <div className={STYLE.emptyText}>没有数据</div>
        </div>
    )
}