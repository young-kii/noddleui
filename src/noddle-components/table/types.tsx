import React from "react";

namespace _Table {
    export interface tableProps {
        dataSource: any[]
        columns: any[]
        titleAlign?: 'left' | 'right' | 'center'
        cellAlign?: 'left' | 'right' | 'center'
        wrap?: 'nowrap' | 'wrap'
        autoWidth?: boolean
        bordered?: boolean
        cellPadding?:number
        fontSize?: number
        outline?: boolean
        crossing?: boolean
        rowKey?: React.Key
    }
}

export default _Table