import _Table from "@/noddle-components/table/types";
import STYLE from './index.module.less'
import React from "react";
import {item} from "@/layout/nav/nav-items/index.d";
import table from "@/pages/components/table";
import {ClassNameConfig} from "@/noddle-components/globalConfig/Config";


export type ColumnsType<T> = {
    title: string,
    dataIndex: keyof T,
    render?: (value: string, records: T) => any
}[]

export default (props: _Table.tableProps) => {
    const {dataSource, columns, titleAlign, cellAlign, wrap, width} = props

    const newColumns = columns ? (columns.length === 0 ? [] : columns) : [] as ColumnsType<any>

    const newData = dataSource ? (dataSource.length === 0 ? [] : dataSource) : [] as typeof dataSource
    const newTitleAlign = titleAlign || 'center'
    const newCellAlign = cellAlign || 'center'
    const styles = ClassNameConfig.mClassNames.bind(STYLE)
    const style_th = styles({
        left: newTitleAlign === 'left',
        right: newTitleAlign === 'right',
        center: newTitleAlign === 'center',
        nowrap: wrap === "nowrap"
    })
    const style_td = styles({
        left: newCellAlign === 'left',
        right: newCellAlign === 'right',
        center: newCellAlign === 'center',
        nowrap: wrap === "nowrap"
    })
    return (
        <div className={STYLE.container} style={{ width: width || '100%'}}>
            <table cellPadding={12} cellSpacing={0}>
                <thead className={STYLE.header}>
                <tr>
                    {
                        newColumns.map(item => {
                            return <th className={style_th} key={item.dataIndex}>{item.title}</th>
                        })
                    }
                </tr>
                </thead>
                <tbody>
                {
                    newData.map((item) => {
                        return <tr key={item.key}>
                            {
                                columns.map(column => {
                                    let content: JSX.Element = <td key={column.dataIndex}/>
                                    Object.keys(item).map((key, index) => {
                                        if (key === column.dataIndex) {
                                            if (column.render && typeof column.render === "function")
                                                content = <td className={style_td} key={index}>
                                                    {
                                                        column.render(item[key],item)
                                                    }
                                                </td>
                                            else content = <td className={style_td} key={index}>{item[key]}</td>
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
        </div>
    )
}